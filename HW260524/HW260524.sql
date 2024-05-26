//1.Вывести видео с продолжительностью от 15 мин и более
db.videos.find(
    { duration_secs: { $gte: 15 * 60 } } // filter
)


//2.Вывести данные юзеров не из Germany (в проекции - без страны)
db.users.find(
    { country: { $ne: "Germany" } }, // filter
    { country: 0 } // projection
)

//3. Вывести данные о всех видео (в проекции - без первичного ключа)
db.videos.find(
    {  } ,    // filter
     {  _id: 0 } // projection

)

//4.Вывести страны и имена всех юзеров
db.users.find(
    {}, // filter
    { country: 1, _id: 0, fullname: 1 } // projection
)