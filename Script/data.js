"use strict";
export class Data
{
    constructor(firstname,lastname,contactNumber,message)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.contactNumber=contactNumber;
        this.message=message;
    }
    setData(json_data)
    {
        this.info1=json_data.info1;
        this.info2=json_data.info2;
        this.info3=json_data.info3;
        this.info4=json_data.info4;
        this.info5=json_data.info5;
        this.info6=json_data.info6;
    }
    setProject(json)
    {
        this.project1=json.project1;
        this.project2=json.project2;
        this.project3=json.project3;
        this.project4=json.project4;
    }
}