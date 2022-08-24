import {useLinearRegression, useGaussianArray} from "./mod.ts"


const x = useGaussianArray(20000000, 5, 1)
const y = useGaussianArray(20000000, 10, 2)
//const y = x.map(n => n * 2)

const lr = useLinearRegression(x, y)

console.log(lr, lr.predict(6))