var assert = require("chai").assert;
var expect = require("chai").expect;



// put your CUT here
class StringSplitter{

    splitString(myString){

        var result = [];

        if (myString.length > 0){
        //     ;
        // }
        // else if (myString.length == 1){
        //     result.push(myString);
        // }
       // else{
            result = myString.split(",")
        }

        return(result);
    }
}



describe('Splitting a string', function() {
    it('Input an empty string, return an empty array []', function() {
        // arrange...
        var cut = new StringSplitter();
        var expectedResult = []
        var emptyString = "";

        // act...
        var actualResult = cut.splitString( emptyString );
        console.log( actualResult);

        // assert...
        assert.equal(actualResult.length, expectedResult.length );
        expect(actualResult).to.eql(expectedResult);
    });

    it('Input one string, return array with one item', function() {
        // arrange...
        var cut = new StringSplitter();
        var expectedResult = ["java"]
        var emptyString = "java";

        // act...
        var actualResult = cut.splitString( emptyString );
        console.log( actualResult);

        // assert...
        assert.equal(actualResult.length, expectedResult.length );
        expect(actualResult).to.eql(expectedResult);
    });

    it('Input two comma seperated strings, return array with two items', function() {
        // arrange...
        var cut = new StringSplitter();
        var expectedResult = ["java", "python"]
        var inputString = "java,python";

        // act...
        var actualResult = cut.splitString( inputString );
        console.log( actualResult);

        // assert...
        assert.equal(actualResult.length, expectedResult.length );
        expect(actualResult).to.eql(expectedResult);
    });

});