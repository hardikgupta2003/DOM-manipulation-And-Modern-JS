async function utility(){

    let delhiMausam=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("delhi me bohot thand hai")
        }, 5000);
    });

    let hydMausam=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("hyderabad me bohot garmi hai")
        }, 6000);
    });

    let dM= await delhiMausam;
    let hM=hydMausam

    return [dM,hM];
}
