"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRightLeft, Loader2 } from "lucide-react";
import { useExchangeRates } from "@/hooks/use-destinations";

interface CurrencyConverterProps {
  fromCurrency: string;
  toCurrency: string;
}

export function CurrencyConverter({
  fromCurrency,
  toCurrency,
}: CurrencyConverterProps) {
  const [amount, setAmount] = useState<string>("100");
  const [from, setFrom] = useState(fromCurrency);
  const [to, setTo] = useState(toCurrency);

  const { data: exchangeRates, isLoading } = useExchangeRates();

  const currencies = exchangeRates ? Object.keys(exchangeRates) : [];

  const convertCurrency = (
    value: number,
    fromCurr: string,
    toCurr: string
  ): number => {
    if (!exchangeRates) return 0;
    const inUSD = value / exchangeRates[fromCurr];
    return inUSD * exchangeRates[toCurr];
  };

  const numAmount = Number.parseFloat(amount) || 0;
  const converted = convertCurrency(numAmount, from, to);

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRightLeft className="h-5 w-5 text-primary" />
            Currency Converter
          </CardTitle>
          <CardDescription>
            Convert between currencies (rates are approximate)
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-12">
          <div className="text-center space-y-2">
            <Loader2 className="h-6 w-6 animate-spin mx-auto text-primary" />
            <p className="text-sm text-muted-foreground">
              Loading exchange rates...
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowRightLeft className="h-5 w-5 text-primary" />
          Currency Converter
        </CardTitle>
        <CardDescription>
          Convert between currencies (rates are approximate)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-end">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
            <Select value={from} onValueChange={setFrom}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((curr) => (
                  <SelectItem key={curr} value={curr}>
                    {curr}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <button
            onClick={swapCurrencies}
            className="mb-2 p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Swap currencies"
          >
            <ArrowRightLeft className="h-4 w-4" />
          </button>

          <div className="space-y-2">
            <Label>Converted Amount</Label>
            <div className="h-10 px-3 py-2 bg-muted rounded-md flex items-center font-semibold">
              {converted.toFixed(2)}
            </div>
            <Select value={to} onValueChange={setTo}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((curr) => (
                  <SelectItem key={curr} value={curr}>
                    {curr}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="text-xs text-muted-foreground text-center pt-2 border-t">
          Exchange rates are approximate and for reference only. Check current
          rates before exchanging money.
        </div>
      </CardContent>
    </Card>
  );
}
