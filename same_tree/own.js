var isSameTree = function(p, q){
    if(p && q){
        if(p.val != q.val){
        return false;
        }
        else{
            console.log(p.val, q.val);
            if(isSameTree(p.left, q.left) && isSameTree(p.right, q.right)){
                return true;
            } else {
                return false;
            }
        }
    }
    if(p == null && q){
        return false;
    }
    if(p && q == null){
        return false;
    }
    if(p == null && q == null){
        return true
    }
};