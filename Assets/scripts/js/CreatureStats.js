#pragma strict


var name:String = "";//real name
var defaultname:String = "";//monster default

var nameid:String = "";

var bdefaultname:boolean = false;

var ownername:String = "";
var ownerid:String = "";

var partyname:String = "";
var partyid:String = "";

var bcontroller:boolean = false;
var bbot:boolean = true;
var botobjscript:Transform;


var gender:String;
var races:String[];
var title:String = "";
var titles:String[];

var traits:String[];
var skills:String[];
var passives:String[];

var attack:float = 0;
var defence:float = 0;

var attackmagic:float = 0;
var defencemagic:float = 0;

var Strength:float = 0;
var Endurance:float = 0;
var Dexterity:float = 0;
var Speed:float = 0;
var Intelligence:float = 0;
var Wisdom:float = 0;
var Luck:float = 0;
var Mentality:float = 100;