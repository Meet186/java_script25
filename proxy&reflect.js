let obj = {
    name : "meet",
    age : 20,
    gender : "male"
};
const proxy_obj = new Proxy(obj,{
    get(target,property){
        if(property in target) return Reflect.get(target,property);
        return false;
    },
    set(target,property,value){
        if(!(property in target)) throw new Error(`${property} does not exist`);
        switch (property) {
            case 'name':
            case 'gender':    
                if(typeof value !== 'string') throw new Error(`${property} should be String`);
                break;
            case 'age':
                if(age <= 0) throw new Error(`${property} should be Grater Than 0`);
                if(typeof value !== Number) throw new Error(`${property} should be Number`);
                break;        
        }
        Reflect.set(target,property,value);
    }
})
proxy_obj.salary = 75000;
console.log(proxy_obj.salary);




