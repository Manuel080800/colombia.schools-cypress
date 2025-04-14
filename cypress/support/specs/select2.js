const Select2Component = (() => {
    const getComponent = (selector) => 
        `.select2-selection--single[aria-labelledby="select2-${selector}-container"]`;

    return {
        component: selector => getComponent(selector),
        search: '.select2-search__field',
        result: '.select2-results__option'
    };
})

export {Select2Component};