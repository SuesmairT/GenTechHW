//1.Вывести названия двух произвольных треков с тегом mega
db.videos.aggregate([
    { $match: { tags: 'mega' } },
    { $sample: { size: 2 } },
    { $project: { title: 1, _id: 0 } }
])

//2.Вывести имя юзера с самым минимальным балансом
db.users.aggregate([
    { // этап 1
        $sort: {
            balance: 1
        }
    },
    { // этап 2
        $limit: 1
    }
])


//3.Используя метод countDocuments(), вывести ко-во заблокированных юзеров с балансом от 10 до 1000 EUR (вкл.)
db.users.countDocuments({
    is_blocked: true,
    balance: { $gte: 10, $lte: 1000}

})

//4. Используя метод aggregate(), вывести ко-во незаблокированных юзеров не из Germany и не из France с балансом до 1000 EUR (не вкл.)

db.users.aggregate([
    {
        $match: {
            is_blocked: { $ne: true },
            country: { $nin: ['Germany', 'France'] },
            balance: { $lt: 1000 }
        }
    }
])

-- Также очень коротко опишите, как работает агрегация в MongoDB
Можно получить обработаные данные после определёных указаных этапов по типу фильтрации, сортировки, лимитирования и проекции