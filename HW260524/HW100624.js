db.users.updateMany(
    { country: { $ne:'China', 'France' }, // filter


        $unset: {
            is_blocked: null}},
           { $inc: {
            balance: 150}
    }
)

db.videos.find( {
        duration_secs: { $lte: 60 }
    , // filter
     tags: 'super' }
)