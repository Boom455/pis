import fs from 'fs'

const product_list: { [key: string]: any } = {}

for (const file of fs.readdirSync(`${process.cwd()}/data`)) {
    const code = file.replace('.json', '')
    console.log('Import product', code)
    product_list[code] = JSON.parse(fs.readFileSync(`${process.cwd()}/data/${file}`, 'utf8'))
}

const product_type: { [key: number]: string } = {
    0: 'OTHER',
    1: 'FOOD AND DRINK',
    2: 'DRINKFOOD AND DRINK',
    3: 'HOUSEHOLD ESSENTIALS',
    4: 'ELECTRONIC',
    5: 'BEAUTY AND PERSONAL CARE',
    6: 'HEALTH AND WELLNESS',
    7: 'PETS',
    8: 'SEASONING SAUCE',
    9: 'MOM AND BABY',
}

export default { product_list, product_type }
