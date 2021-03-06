# JSON files from LocalePlanet

http://www.localeplanet.com/ gives you only javascript objects,
this is a python script that transform those objects into json files
that could be used anywhere.

## Usage
For this script to work properly needs **python 2.7** and **nodejs** installed.

`python generate.py`

## Example Output

```json
{
	"country": "CL",
	"countryName": "Chile",
	"dateFormatSymbols": {
		"am_pm": ["a.m.", "p.m."],
		"day_name": ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
		"day_short": ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
		"era": ["a.C.", "d.C."],
		"era_name": ["antes de Cristo", "anno Dómini"],
		"month_name": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
		"month_short": ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
		"order_full": "DMY",
		"order_long": "DMY",
		"order_medium": "DMY",
		"order_short": "DMY"
	},
	"decimalFormatSymbols": {
		"decimal_separator": ",",
		"grouping_separator": ".",
		"minus": "-"
	},
	"languageCode": "es",
	"languageName": "español",
	"locale": "es-CL",
	"localeUnderscore": "es_CL",
	"localeName": "español (Chile)"
}
```

[Made by Ninjas](http://www.ninjas.cl)