//dataservice factory.

app2.service('dataservice', ['$http', function($http) {

    var obj = {};

    var flag = '';

    obj.data = {};

    obj.setdata = function(ob, str) {

        obj.data = null;
        flag = '';

        if (str === "add") {

            obj.data = ob;
            flag = 'addition';

        }

        if (str === "viewall") {

            obj.data = ob;
            flag = 'load';
        }

        console.log(flag);

    }
    obj.getFlag = function() {
        return flag;
    }

    obj.getdata = function() {

        return obj.data;
    }

    obj.searchone = function(text) {

        return $http.get('http://localhost:8080/people?name=' + text);
    }

    obj.searchall = function() {

        return $http.get('http://localhost:8080/people/?&_limit=20');
    }

    obj.delete = function(id) {

        return $http.delete('http://localhost:8080/people/' + id);
    }

    obj.add = function(object) {

        return $http.post('http://localhost:8080/people', object);
    }

    obj.update = function(myob, id) {
        return $http.put('http://localhost:8080/people/' + id, myob);
    }

    obj.nextpage = function(start) {
        return $http.get('http://localhost:8080/people/?_page=' + start);
    }


    return obj;
}]);
