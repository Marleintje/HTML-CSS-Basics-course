## TODO's vóór cursus
- Check met Manon o.i.d. of SHIFT + ALT + F werkt (Mac: MacShift + Option + F)
- Vraag Lisa hoe ze normaal ervoor zorgt dat images alleen op bepaalde schermgroottes verschijnen in t CMS

- Verzend nog een email naar iedereen met de volgende instructies voor downloadne GIT:
    - Windows: https://gitforwindows.org/
    - Mac: https://git-scm.com/download/mac
- Installeren extensies: Live Server (Ritwick Dey), HTMLHint (Mike Kaufman)

## Uitleg VS code why:
- Indentation, overzicht
- Sluit vanzelf tags
- Geeft tips
- Handige shortcodes en cuts in VS code
- Als je dingen copy-paste into CMS, eerst langs editor

## Tips CMS:
- Filenames uploaden: geen speciale tekens, geen spaties. Het liefst woorden scheiden met een dash: -

## Ideeën cursus:

- <br> versus padding/margin.
- Dingen die wij standaard targeten om pagina's er conform het design uit te laten zien; risico verlagen dat dit in het CMS zelf opgesmukt wordt, door HTML zo clean mogelijk te houden.
- Bootstrap dingen hiden en niet hiden --> Eigenlijk moeten wij dat doen (maar ja...) --> Grey area
- H1, H2, etc standaard een bepaalde grootte en look. Check dit ev. op website bij ander artikel.
- SEO tips voor het maken van een pagina: één H1, etc.
- Alles extra ruimte in spaties is eigenlijk 1 spatie. Als je 'enter enter' doet in het CMS, komen er <br> voor in de plaats
- Uploaden images: niet groter dan zoveel MB?


## Ideëen cursus via Codecademy

- <html>, <body> tags en such zijn essentieel voor goed HTML doc, maar deze zul je niet zien als je in CMS aan de slag gaat
- Alles wat je schrijft in CMS is eigenlijk HTML
- <b> vs font-weight-bold
- 4/16 -> Child, parent, sibling(s), nesting, indentation, inheritance of behavior
- <div> stands voor division and groups HTML elements together
- in een <p> zit een blok text. De standaard opmaak is al met ruimte ertussen, dus geen extra br bitte. <p>
worden vanzelf gecreëerd door het CMS
- een <span> wordt gebruikt voor short pieces of text; they often separate content on the same line
(bv CMS kleur geven, hoe dat automatisch een span creëert, en dat we dit willen vermijden)
- Note that <p> and <div> are block-level elements: they push sibling elements to a new line or section
- In het CMS is één klik op enter een nieuwe paragraaf, maar nog eentje creëert een <br>.
- img: The value of alt should be a description of the image. Read brief description if image isn't working,
visually impaired users, cán improve ranking of your site
- <a> anchor element. Href (attribute) = hyperlink reference. Open link in new window with attribute target="_blank".


## Verzameling aan CMS zaken - te presenteren

### Live CMS --> Flinndal --> Default --> Levering en thuiswinkelgarantie
- <br> eruit
- Useless col-sm-9 (moet er gewoon helemaal niet staan)
- Eerste alinea begint zonder <p>
- Eerste alinea heeft lege <p></p> aan t einde
- Nutteloze &nbsp;

Git ignore file looks like this:
# # Complete excercises that will be released only during the course
# /Exercises-complete/1-complete.html
# /Exercises-complete/2-complete-id-class.html
# /Exercises-complete/3-complete-bootstrap.html
# /Exercises-complete/cms-voorbeeld.html
# /Exercises-complete/complete.css

# # Notes
# notes-to-self.md
