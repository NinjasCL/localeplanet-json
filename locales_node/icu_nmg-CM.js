

	var dfs = {"am_pm":["maná","kugú"],"day_name":["sɔ́ndɔ","mɔ́ndɔ","sɔ́ndɔ mafú mába","sɔ́ndɔ mafú málal","sɔ́ndɔ mafú mána","mabágá má sukul","sásadi"],"day_short":["sɔ́n","mɔ́n","smb","sml","smn","mbs","sas"],"era":["BL","PB"],"era_name":["Bó Lahlɛ̄","Pfiɛ Burī"],"month_name":["ngwɛn matáhra","ngwɛn ńmba","ngwɛn ńlal","ngwɛn ńna","ngwɛn ńtan","ngwɛn ńtuó","ngwɛn hɛmbuɛrí","ngwɛn lɔmbi","ngwɛn rɛbvuâ","ngwɛn wum","ngwɛn wum navŭr","krísimin"],"month_short":["ng1","ng2","ng3","ng4","ng5","ng6","ng7","ng8","ng9","ng10","ng11","kris"],"order_full":"MDY","order_long":"MDY","order_medium":"MDY","order_short":"MDY"};
	var nfs = {"decimal_separator":",","grouping_separator":" ","minus":"-"};
	// var df = {SHORT_PADDED_CENTURY:function(d){if(d){return(((d.getMonth()+101)+'').substring(1)+'/'+((d.getDate()+101)+'').substring(1)+'/'+d.getFullYear());}},SHORT:function(d){if(d){return((d.getMonth()+1)+'/'+d.getDate()+'/'+(d.getFullYear()+'').substring(2));}},SHORT_NOYEAR:function(d){if(d){return((d.getMonth()+1)+'/'+d.getDate());}},SHORT_NODAY:function(d){if(d){return((d.getMonth()+1)+' '+(d.getFullYear()+'').substring(2));}},MEDIUM:function(d){if(d){return(dfs.month_short[d.getMonth()]+' '+d.getDate()+','+' '+d.getFullYear());}},MEDIUM_NOYEAR:function(d){if(d){return(dfs.month_short[d.getMonth()]+' '+d.getDate());}},MEDIUM_WEEKDAY_NOYEAR:function(d){if(d){return(dfs.day_short[d.getDay()]+' '+dfs.month_short[d.getMonth()]+' '+d.getDate());}},LONG_NODAY:function(d){if(d){return(dfs.month_name[d.getMonth()]+' '+d.getFullYear());}},LONG:function(d){if(d){return(dfs.month_name[d.getMonth()]+' '+d.getDate()+','+' '+d.getFullYear());}},FULL:function(d){if(d){return(dfs.day_name[d.getDay()]+','+' '+dfs.month_name[d.getMonth()]+' '+d.getDate()+','+' '+d.getFullYear());}}};
	
	
	var icu = {};	
		
	icu.getCountry = function() { return "CM" };
	icu.getCountryName = function() { return "Kamerun" };
	// icu.getDateFormat = function(formatCode) { var retVal = {}; retVal.format = df[formatCode]; return retVal; };
	icu.getDateFormats = function() { return df; };
	icu.getDateFormatSymbols = function() { return dfs; };
	icu.getDecimalFormat = function(places) { var retVal = {}; retVal.format = function(n) { var ns = n < 0 ? Math.abs(n).toFixed(places) : n.toFixed(places); var ns2 = ns.split('.'); s = ns2[0]; var d = ns2[1]; var rgx = /(\d+)(\d{3})/;while(rgx.test(s)){s = s.replace(rgx, '$1' + nfs["grouping_separator"] + '$2');} return (n < 0 ? nfs["minus"] : "") + s + nfs["decimal_separator"] + d;}; return retVal; };
	icu.getDecimalFormatSymbols = function() { return nfs; };
	icu.getIntegerFormat = function() { var retVal = {}; retVal.format = function(i) { var s = i < 0 ? Math.abs(i).toString() : i.toString(); var rgx = /(\d+)(\d{3})/;while(rgx.test(s)){s = s.replace(rgx, '$1' + nfs["grouping_separator"] + '$2');} return i < 0 ? nfs["minus"] + s : s;}; return retVal; };
	icu.getLanguage = function() { return "nmg" };
	icu.getLanguageName = function() { return "nmg" };
	icu.getLocale = function() { return "nmg-CM" };
	icu.getLocaleUnderscore = function(){ return icu.getLocale().replace('-','_') }; icu.getLocaleName = function() { return "nmg (Kamerun)" };


	var locale = {};
	locale.country = icu.getCountry();
	locale.countryName = icu.getCountryName();

	locale.dateFormatSymbols = icu.getDateFormatSymbols();

	locale.decimalFormatSymbols = icu.getDecimalFormatSymbols();


	locale.languageCode = icu.getLanguage();
	locale.languageName = icu.getLanguageName();
	locale.locale = icu.getLocale();
	locale.localeUnderscore = icu.getLocaleUnderscore();
	locale.localeName = icu.getLocaleName();

	console.log(JSON.stringify(locale));
	