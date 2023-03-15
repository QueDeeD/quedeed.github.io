const cats = [
    {
        "name": "Лара",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2021-09/167200DD-A44F-4845-8D4D-ACCFC180165A.jpeg",
        "age": 8,
        "rate": 7,
        "favourite": false,
        "description": "Лара – шотландская вислоухая, у нее остеохондродисплазия. Лара спокойная, очень ласковая и контактная. Болезнь не лечится и специального ухода не нужно.",
        "id": 1
    },
    {
        "name": "Базиль",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/064AEBCB-45EC-4CE7-AB13-C65F10F00B7B.jpeg",
        "age": 2,
        "rate": 10,
        "favourite": false,
        "description": "Внимательный, активный и ласковый. Любит играть, катать мяч, и мурчать на пледе рядом с людьми! Прилично воспитан, приучен к лотку. Вакцинирован, имеет ветеринарный паспорт.",
        "id": 2
    },
    {
        "name": "Риш",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/_DM34706.JPG",
        "age": 1,
        "rate": 10,
        "favourite": true,
        "description": "Риш любит лесенки, канаты. Очень активный и дружелюбный кот. Риш полностью здоров, привит, кастрирован. Использует лоточек и очень аккуратен.",
        "id": 3
    },
    {
        "name": "Элли",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/1_25.jpg",
        "age": 4,
        "rate": 8,
        "favourite": false,
        "description": "Элли обладает мягким и добрым характером. Очень любит всевозможные лакомства и вкусно покушать. Не доверяет людям, потребуется время, чтобы стать ей другом. Приучена к лотку и когтеточке",
        "id": 4
    },
    {
        "name": "Чарли",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D0%BB%D0%B5%D0%B2%D0%B83_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg",
        "age": 1,
        "rate": 8,
        "favourite": false,
        "description": "Чёрно-белый юный котофилософ очень любит размышлять и быть наедине. Пока что не доверяет людям, не агрессивный. Ладит с другими животными, приучен к лотку и когтеточке",
        "id": 5
    },
    {
        "name": "Стефани",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/4_30.jpg",
        "age": 6,
        "rate": 9,
        "favourite": false,
        "description": "Прелестная Стефани – трогательная, добродушная и очень-очень общительная девочка как никто другой нуждается в заботе и любви. Приучена к лотку и когтеточке",
        "id": 6
    },
    {
        "name": "Дуся",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-02/B1444207-6EE3-4BA4-97F7-2F9666AE2F63.jpeg",
        "age": 1,
        "rate": 9,
        "favourite": false,
        "description": "Дусеньке около 1 года с небольшим, здорова, привита, стерилизована. Лоточек и когтеточку знает прекрасно. Очень общительная и нежная, хочет постоянного внимания.",
        "id": 7
    },
    {
        "name": "Бруно",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/IMG-20211223-WA0049.jpg",
        "age": 1,
        "rate": 10,
        "favourite": false,
        "description": "Очаровательный активный кот Бруно, находится в постоянном движении! Очаровательный и ласковый кот. Приучен к лотку, ладит с другими котами, привит.",
        "id": 8
    },
    {
        "name": "Лара",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8F%D1%87%D0%BE%D0%BA4_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg",
        "age": 1,
        "rate": 9,
        "favourite": true,
        "description": "Немного боязливый, но очень добрый и нежный кот Светлячок. Приучен к лотку и когтеточке, ладит с детьми, привит. Станет вам хорошим другом",
        "id": 9
    }
]

function comp(array){

    let newT = document.createElement('table');
    document.body.append(newT)
    newT.style.fontSize = "23px"
    
    let rowHeader = document.createElement('tr')
    newT.append(rowHeader)

    let h_name = document.createElement('th')
    let h_id = document.createElement('th')
    let h_img = document.createElement('th')
    let h_age = document.createElement('th')
    let h_rate = document.createElement('th')
    let h_fav = document.createElement('th')
    let h_desc = document.createElement('th')
    
    h_id.innerText = 'ID'
    h_name.innerText = 'Name'
    h_img.innerText = 'Image'
    h_age.innerText = 'Age'
    h_rate.innerText = 'Rate'
    h_fav.innerText = 'Favourite'
    h_desc.innerText = 'Description'
    

    rowHeader.append(h_id, h_name, h_img, h_age, h_rate, h_fav, h_desc, )

for (let elem of array){
    let row = document.createElement('tr')
        newT.append(row)
        

        let photo = new Image(350)
        photo.src = elem.img_link
        
        let c_name = document.createElement('td')
        let c_age = document.createElement('td')
        let c_rate = document.createElement('td')
        let c_fav = document.createElement('td')
        let c_des = document.createElement('td')
        let c_id = document.createElement('td')

        
        c_name.innerText = elem.name
        c_age.innerText = elem.age
        c_rate.innerText = elem.rate
        if (elem.rate < 5)
            c_rate.style.backgroundColor = "red"        
        else if (elem.rate > 5 && elem.rate <=7)
            c_rate.style.backgroundColor = "orange"        
        else if (elem.rate > 7 && elem.rate <=9)
            c_rate.style.backgroundColor = "green"
        else 
            c_rate.style.backgroundColor = "gold"

        if (elem.favourite == true){
            let img = new Image(50,50);
            img.src = "https://w7.pngwing.com/pngs/134/138/png-transparent-star-golden-stars-angle-3d-computer-graphics-symmetry-thumbnail.png"
            c_fav.appendChild(img)
        }
        else {
            let img = new Image(50,50);
            img.src = "https://toppng.com/uploads/preview/cross-wrong-cross-transparent-background-11562851969ihtu0kgnjy.png"
            c_fav.appendChild(img)
        }
        c_des.innerText = elem.description
        c_des.style.minWidth = "250px"
        c_des.style.maxWidth = "750px"
        c_id.innerText = elem.id
        c_age.style.minWidth = "50px"
        c_rate.style.minWidth = "50px"
        c_id.style.minWidth = "50px"
        
        row.append(c_id, c_name, photo, c_age, c_rate, c_fav, c_des)
}
}
comp(cats)