export const formatPrice = (number) => {
    const newNum = Intl.NumberFormat('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    }).format(number);

    return newNum;
}

export const getUniqueValues = () => {}
