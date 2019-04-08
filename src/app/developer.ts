export class Developer {
    id:number;
    firstName: string;
    lastName: string;
    favouriteLanguage: string;
    yearStarted: number;
    

    constructor(
        id:number,
        firstName:string,
        lastName:string,
        favouriteLanguage:string,
        yearStarted: number
        ){
           this.id=id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.favouriteLanguage= favouriteLanguage;
            this.yearStarted= yearStarted;

        }

}
