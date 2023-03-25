export const formatPrice = (number) => {
    const newNum = Intl.NumberFormat('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    }).format(number);

    return newNum;
}

export const getUniqueValues = (data,type) => {
    let unique=data.map((item)=>{
        return item[type]
    })
    if(type==='colors'){
        unique=unique.flat();
    }
return ['all',...new Set(unique)];

}
