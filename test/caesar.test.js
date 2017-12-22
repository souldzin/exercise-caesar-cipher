const cipher = require('../src/caesar');
const {expect} = require('chai');

describe("caesar", function(){
  it("encrypts a message", function(){
    const result = cipher("Hello world!", 2);

    expect(result).to.eql("Jgnnq yqtnf!");
  }); 
  
  xit("decrypts a message with negative value", function(){

  });

})
