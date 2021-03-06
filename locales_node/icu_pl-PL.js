

	var dfs = {"am_pm":["AM","PM"],"day_name":["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],"day_short":["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],"era":["p.n.e.","n.e."],"era_name":["p.n.e.","n.e."],"month_name":["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"],"month_short":["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],"order_full":"DMY","order_long":"DMY","order_medium":"YMD","order_short":"DMY"};
	var nfs = {"decimal_separator":",","grouping_separator":" ","minus":"-"};
	// var df = {SHORT_PADDED_CENTURY:function(d){if(d){return(((d.getDate()+101)+'').substring(1)+'.'+((d.getMonth()+101)+'').substring(1)+'.'+d.getFullYear());}},SHORT:function(d){if(d){return(((d.getDate()+101)+'').substring(1)+'.'+((d.getMonth()+101)+'').substring(1)+'.'+(d.getFullYear()+'').substring(2));}},SHORT_NOYEAR:function(d){if(d){return(((d.getDate()+101)+'').substring(1)+'.'+((d.getMonth()+101)+'').substring(1));}},SHORT_NODAY:function(d){if(d){return(((d.getMonth()+101)+'').substring(1)+'.'+(d.getFullYear()+'').substring(2));}},MEDIUM:function(d){if(d){return(d.getFullYear()+'-'+((d.getMonth()+101)+'').substring(1)+'-'+((d.getDate()+101)+'').substring(1));}},MEDIUM_NOYEAR:function(d){if(d){return(((d.getMonth()+101)+'').substring(1)+'-'+((d.getDate()+101)+'').substring(1));}},MEDIUM_WEEKDAY_NOYEAR:function(d){if(d){return(dfs.day_short[d.getDay()]+' '+((d.getMonth()+101)+'').substring(1)+'-'+((d.getDate()+101)+'').substring(1));}},LONG_NODAY:function(d){if(d){return(dfs.month_name[d.getMonth()]+' '+d.getFullYear());}},LONG:function(d){if(d){return(d.getDate()+' '+dfs.month_name[d.getMonth()]+' '+d.getFullYear());}},FULL:function(d){if(d){return(dfs.day_name[d.getDay()]+','+' '+d.getDate()+' '+dfs.month_name[d.getMonth()]+' '+d.getFullYear());}}};
	
	
	var icu = {};	
		
	icu.getCountry = function() { return "PL" };
	icu.getCountryName = function() { return "Polska" };
	// icu.getDateFormat = function(formatCode) { var retVal = {}; retVal.format = df[formatCode]; return retVal; };
	icu.getDateFormats = function() { return df; };
	icu.getDateFormatSymbols = function() { return dfs; };
	icu.getDecimalFormat = function(places) { var retVal = {}; retVal.format = function(n) { var ns = n < 0 ? Math.abs(n).toFixed(places) : n.toFixed(places); var ns2 = ns.split('.'); s = ns2[0]; var d = ns2[1]; var rgx = /(\d+)(\d{3})/;while(rgx.test(s)){s = s.replace(rgx, '$1' + nfs["grouping_separator"] + '$2');} return (n < 0 ? nfs["minus"] : "") + s + nfs["decimal_separator"] + d;}; return retVal; };
	icu.getDecimalFormatSymbols = function() { return nfs; };
	icu.getIntegerFormat = function() { var retVal = {}; retVal.format = function(i) { var s = i < 0 ? Math.abs(i).toString() : i.toString(); var rgx = /(\d+)(\d{3})/;while(rgx.test(s)){s = s.replace(rgx, '$1' + nfs["grouping_separator"] + '$2');} return i < 0 ? nfs["minus"] + s : s;}; return retVal; };
	icu.getLanguage = function() { return "pl" };
	icu.getLanguageName = function() { return "polski" };
	icu.getLocale = function() { return "pl-PL" };
	icu.getLocaleUnderscore = function(){ return icu.getLocale().replace('-','_') }; icu.getLocaleName = function() { return "polski (Polska)" };


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
	