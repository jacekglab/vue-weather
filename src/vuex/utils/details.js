export function mapDetails(array, subset, property, decorator){
    return array
            .map(currentValue => currentValue[subset][property] + decorator);
}

export function mapAndReduce(array, subset, property, decorator, precision){
    return array
            .map(currentValue => (currentValue[subset]
            .reduce((accumulator, currentValue) => accumulator + currentValue[property], 0)/currentValue[subset].length)
            .toFixed(precision) + decorator);
}