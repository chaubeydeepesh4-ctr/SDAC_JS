function payment(status){
    return new Promise ((resolve, reject) => {
        if (status) {
            resolve ("Payment sucessfull!!!")
        } else {
            reject("Errrorrr occured")
        }
    });
};
payment (true). then((a) => {
    console.log(a);
})
.catch((error) => 
{
    console.log(error);
    
});