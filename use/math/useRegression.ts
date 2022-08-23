interface LinearRegression {
    slope: number;
    intercept: number;
    predict: (x: number) => number;
    r2: number;
}

export function useLinearRegression(x: number[], y: number[]): LinearRegression {
    const n =  Math.min(x.length, y.length);
    const mean = [0, 0];
    let i = 0;
    while(i < n) {
        mean[0] += x[i];
        mean[1] += y[i];
        ++i;
    }
    mean[0] = mean[0] / n;
    mean[1] = mean[1] / n;

    const stddev = [0, 0];
    i = 0;
    while(i < n) {
        stddev[0] += (x[i] - mean[0]) * (y[i] - mean[1])
        stddev[1] += (x[i] - mean[0]) * (x[i] - mean[0])
        ++i;
    }
    const slope = stddev[0] / stddev[1];
    const intercept = mean[1] - slope * mean[0];
    const predict = (x: number) => intercept + (slope * x)

    let sse = 0, sst = 0;

    i = 0;
    while(i < n) {
        sse += Math.pow(y[i] - predict(x[i]), 2)
        sst += Math.pow(y[i] - mean[1], 2)
        ++i;
    }
    return {
        slope: slope,
        intercept: intercept,
        predict,
        r2: 1 - sse/sst
    }


}