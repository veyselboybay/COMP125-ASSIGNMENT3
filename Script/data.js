"use strict";
export class Data
{
    constructor(info1="",info2="",info3="",info4="",info5="",info6="")
    {
        this.info1=info1;
        this.info2=info2;
        this.info3=info3;
        this.info4=info4;
        this.info5=info5;
        this.info6=info6;
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
}