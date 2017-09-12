let arr = new myArray('a',1,'b',2,'c',1,2,3);
let arr1 = new myArray(1,2,3,4,5,6);
let arr2 = new myArray1(12,52,6,34,57,96,48);
console.log(arr);
// arr.push(4,5,6);
console.log(arr.IndexOf('a'));
console.log(arr.lastIndextOf(2));
console.log(arr.includes(3));
console.log(arr.reverse());
console.log(arr.join());
console.log(arr.some(function(value){
    return typeof value=='boolean';
}));
console.log(arr.every(function(value){
    return typeof value=='number';
}));
console.log(arr1.map(function(value){
    return value-1;
}));
console.log(arr1.filter(function(value){
    return value>2;
}));


function myArray(){
	for(let i=0;i<arguments.length;i++){
		this[i]=arguments[i];
	}
	this.length=arguments.length;

// push  添加元素
    this.push=function(){
    	for (let i=0;i<arguments.length;i++){
    		this[this.length]=arguments[i];
    		this.length++;
    	}
    }

// IndexOf 某一元素首次出现的位置  找到返回下标，否则为-1.
	this.IndexOf=function(value){
        for(let i=0;i<this.length;i++){
        	if(this[i]==value){
        		return i;
        	}
        }
        return -1;
	}
// lastIndextOf  某一元素最后出现的位置
    this.lastIndextOf=function(value){
    	for(let i=this.length-1;i>=0;i--){
    		if(this[i]==value){
    			return i;
    		}
    	}
    	return -1;
    }
// includes是否存在 存在返回true，否则false;
	this.includes=function(value){
		for(let i=0;i<this.length;i++){
			if(this[i]==value){
				return true;
			}
		}
		return false;
	}
// 反转 reverse
    this.reverse=function(){
    	let newarr=[];
    	for(let i=this.length-1;i>=0;i--){
        	newarr[newarr.length]=this[i];
    	}
    	return newarr;
    }
//join 转换为字符串
    this.join=function(){
    	let newarr=[];
    	for(let i=0;i<this.length;i++){
    		if(i<this.length-1){
    			newarr+=this[i]+'-';
    		}else {
    			newarr+=this[i];	
    		}
        }
    	return newarr;
    }
// some
	this.some=function(fn){
		for(let i=0;i<this.length;i++){
            if(fn(this[i])){
                return true;
            }
		}
        return false;
	}

// every
    this.every=function(fn){
        for(let i=0;i<this.length;i++){
            if(!fn(this[i])){
                return false;
            }
        }
        return true;
    }
// map 映射
    this.map=function(fn){
       let newarr=[];
       for(let i=0;i<this.length;i++){
        newarr[i]=fn(this[i]);
       }
       return newarr; 
    }
// filter 筛选
    this.filter=function(fn){
        let newarr=[];
        for(let i=0;i<this.length;i++){
            if(fn(this[i])){
                newarr[newarr.length]=this[i];
            }
        }
        return newarr;
    }
}


console.log(arr2);
arr2.sort(">");

function myArray1(){
    for(let i=0;i<arguments.length;i++){
        this[i]=arguments[i];
    }
    this.length=arguments.length;
   
    // sort 排序
    this.sort=function(type){
        if(type=="<"){
            console.log(this.Max());
        }
        else if(type==">"){
            console.log(this.Min());
        }
    }
    this.Max=function(){
        for(let i=0;i<this.length;i++){
            for(let j=i+1;j<this.length;j++){
                if(this[i]<this[j]){
                    let temp=this[j];
                    this[j]=this[i];
                    this[i]=temp;
                }
            }
        }
    }
    this.Min=function(){
        for(let i=0;i<this.length;i++){
            for(let j=i+1;j<this.length;j++){
                if(this[i]>this[j]){
                    let temp=this[j];
                    this[j]=this[i];
                    this[i]=temp;
                }
            }
        }
    }
}


