export interface Forecast {
    name: string,
    code: string,
    flag: string,
    exchangeRate: number,
    number: number,
    source: string,
    modeled: Benchmark,
    actual: Benchmark
}

interface Benchmark {
    companyMedian: number,
    median: number,
    high: number
}