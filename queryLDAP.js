var ldap = require("ldapjs");
var client = ldap.createClient({
    // url: 'ldap://192.168.139.130:1389'
    url: 'ldap://192.168.139.130:1389'
});

var opts = {
    // filter: '(uid=Tom)', //查詢條件過濾器，查詢uid=kxh的使用者節點
    filter: '(sn=chang)',
        scope: 'sub',    //查詢範圍
        timeLimit: 500    //查詢超時
};

client.bind('', '', function (err, res1) {
    
    //開始查詢
    //第一個引數：查詢基礎路徑，代表在查詢使用者信心將在這個路徑下進行，這個路徑是由根節開始
    //第二個引數：查詢選項
    // client.search('dc=jenhao321,dc=com', opts, function (err, res2) {
    client.search('dc=jenhao,dc=com', opts, function (err, res2) {        
    //查詢結果事件響應
        res2.on('searchEntry', function (entry) {
            //獲取查詢的物件
            var user = entry.object;
            var userText = JSON.stringify(user,null,2);
            console.log(userText);
        });
        
        res2.on('searchReference', function(referral) {
            console.log('referral: ', referral.uris.join());
        });  
        
        //查詢錯誤事件
        res2.on('error', function(err) {
            console.error('error: ', err.message);
            //unbind操作，必須要做
            client.unbind();
        });

        //查詢結束
        res2.on('end', function(result) {
            console.log('search status: ', result.status);
                //unbind操作，必須要做
                client.unbind();
        });    
    });
});