function stableSort(array, cmp) {
    const stabliziedThis = array.map((el, index) => [el, index]);
    stabliziedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if(order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabliziedThis.map(el => el[0]);
}
export default stableSort;