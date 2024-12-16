export const autocompleteKeys = (() => {
    let availableKeywords = [
        'Ящик',
        'купить калькулятор',
        'гитара ямаха',
        'пивко',
        'крутая мобила, сто гигов',
        'ножик',
        'перочиный нож',
        'купить мощный вентилятор',
        'PFF EN-16',
        'шахматы',
    ]

    const removeKey = (key: string) => {
        const keywords = [...availableKeywords];
        const index = keywords.indexOf(key);
        if (index > -1) {
            keywords.splice(index, 1);
        }
        availableKeywords = keywords;
    }

    const addKey = (key: string) => {
        const keywords = [...availableKeywords];
        keywords.unshift(key);
        availableKeywords = keywords;
    }

    const getKeys = () => {

    }
})();

export let availableKeywords = [
    'Ящик',
    'купить калькулятор',
    'гитара ямаха',
    'пивко',
    'крутая мобила, сто гигов',
    'ножик',
    'перочиный нож',
    'купить мощный вентилятор',
    'PFF EN-16',
    'шахматы',
]