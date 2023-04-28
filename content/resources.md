+++
title = "Resources"
+++

## Tools

### Data Cleaning / Editing

- Systematic interpretation
  - Humanities-oriented tools
    - [TEI](https://tei-c.org/guidelines/)
    - [Tropy](https://tropy.org/)
    - [Recogito](https://recogito.pelagios.org/)
      - collaborative data annotation platform for text and
        images
      - includes syntax for places, people, events
      - multiple export formats
      - runs auto Named-Entity Recognition
  - General tools
    - [Airtable](https://www.airtable.com/product)
    - Google Sheets/Forms
    - [Atom](https://atom.io/)
      - free and open-source text and code editor
      - powerful search across files
      - supports regular expressions
      - robust community of developers who contribute "packages"
        that extend Atom's functionality, including data
        transforms, specialized syntax highlighting, easy GitHub
        integration, etc
  - Qualitative analysis tools:
    [NVivo](https://www.qsrinternational.com/nvivo-qualitative-data-analysis-software/about/nvivo),
    [ATLAS.ti](https://atlasti.com/product/what-is-atlas-ti/),
    [MAXQDA](https://www.maxqda.com/why-maxqda)
- Semi-automated cleaning tools
  - [OpenRefine](https://openrefine.org/)
    - power tool for cleaning tabular data and some XML
    - supports regular expressions
  - [tidyr](https://tidyr.tidyverse.org/articles/tidy-data.html)
    (part of the
    [tidyverse](https://www.tidyverse.org/) suite of
    tools for R)
  - [Breve](https://hdlab.stanford.edu/breve/)
    - web based visual tool for seeing data errors in tabular data
    - NEH-funded project under development at Stanford's Center
      for Spatial and Textual Analysis
  - [WTFcsv](https://www.databasic.io/wtfcsv)
    - web based visual tool for a quick snapshot of the data in a
      csv file
- String pattern manipulation
  - [Regular expressions](https://en.wikipedia.org/wiki/Regular_expression)
    - [RegEx 101](https://regex101.com/) tool
    - _Programming Historian_ [introduction to regular expressions](https://programminghistorian.org/en/lessons/understanding-regular-expressions)
  - [stringr](https://stringr.tidyverse.org/) (also
    part of the tidyverse)

### Databases

- [Airtable](https://airtable.com/): collaborative
  database platform
  - allows you to embed a browsable copy of your database in a webpage
  - super user friendly, with tutorials that explain features like pivot tables
  - free account allows for 2GB server space and revision history 2 weeks old, but further features cost \$\$
- [Mukurtu](https://mukurtu.org/about/): content management system supporting Indigenous knowledge systems and values
  - grassroots platform currently used by six hundred different
    groups to "curate their own Web sites and regulate access in
    accordance with custom"
  - multiple records can be generated for single digital heritage
    items, allowing for overlapping cultural narratives
  - "There is rarely just one story, one set of information, or one
    way of knowing cultural heritage materials."
- [Omeka](https://omeka.org/): open-source web
  publishing platforms for sharing digital collections and creating
  media-rich online exhibits.
  - designed by the Roy Rosenzweig Center for History and New Media
    at George Mason University, who developed Zotero
  - a go-to choice for many digital humanists and museums looking
    for a user-friendly, sustainable system for creating online
    collections/exhibits

### Repositories

#### Discipline-specific repositories

- Tighter communities with richer standards
- May have more restrictions, and perhaps a cost
- Example: [Humanities Commons CORE](https://hcommons.org/core/)

#### Generalist repositories

- Loose communities with boilerplate standards
- Often unmediated (fast, but no quality assurance)
- Example: [Zenodo](https://zenodo.org/), open access repository maintained by CERN
  - automatically assigns DOI's to all files
  - If you publish software or data in Github, you can [create a citable archived version](http://libguides.mit.edu/c.php?g=551454&p=3786120#s-lg-box-wrapper-14235641)
    whenever you choose through Zenodo
    - This feature used by CDH for:
    - Derrida's Margins codebase:
      [https://doi.org/10.5281/zenodo.1453447](https://doi.org/10.5281/zenodo.1453447)
    - PPA codebase
      [https://doi.org/10.5281/zenodo.2400705](https://doi.org/10.5281/zenodo.2400705)
  - possible to sign up directly through your GitHub account
  - because Zenodo accepts image / video / PDF files in addition to
    numerical / tabular / textual data, many scholars use Zenodo as
    an alternative to the for-profit academia.edu when sharing
    copies of their articles or creating public research profiles:
    many metadata categories available for journal name, pages, etc.
    that Figshare and Dataverse don't have
  - Social collections: tag datasets with "community collections,"
    curated by individual Zenodo users. Example: a collection of
    datasets, papers, presentations and source code on [Digital Historical Linguistics](https://zenodo.org/communities/dighl/?page=1&size=20)
    created by one user
  - "your research output is stored safely for the future in the
    same cloud infrastructure as CERN's own LHC research data."
  - 50GB per dataset limit
- Example: [Dataverse](https://dataverse.org/), open
  access repository hosted by Harvard Institute for Quantitative
  Social Studies (IQSS)
  - A "dataverse" is a container for all your datasets, files, and
    metadata.
  - Tag datasets with pre-set categories, less than are available on
    Figshare
  - Allows user to customize the look of their \"Dataverse\" or
    collection
  - Allows for tiered access
  - Includes some integrated data analysis tools, and a useful "data
    explorer" web interface that lists the variables in a tabular
    data file and allows users to search, chart, and conduct cross
    tabulation analysis
  - Used by _Cultural Analytics_ journal
  - 2.5 GB per file, 10 GB per dataset limit

#### Institutional repositories

- Often curated, and can accept many sizes and types of data
- Restricted to affiliates, but open to all disciplines
- Example: Princeton University's institutional data repository,
  [Princeton Data Commons](https://datacommons.princeton.edu/discovery/)
  - assigns DOIs to datasets
  - offers data curation advice and assistance on deposits, with
    focus on metadata and tagging for preservation and discovery,
    and open formats for re-use
  - accepts all forms of research data (including research code)
  - has community approach, with upcoming DH community
  - infrastructure supported by library expertise in long-term
    digital preservation and archival practice

#### Further comparisons of repository features compiled by:

- [Harvard Medical School](https://docs.google.com/spreadsheets/d/1_VbZsxYeov1Z19Cf5CkwToDW1WpWLLCS9ZKG7aCmJGc/edit?usp=sharing)
- [Dataverse](https://dataverse.org/blog/comparative-review-various-data-repositories)

### Project Management Platforms

- [Asana](https://asana.com/)
  - online project management platform with shared to-do lists
- [Trello](https://trello.com/en)
  - team communications app in a message board format
- [Slack](https://slack.com/)
  - group communications with topic-based channels

## Tutorials

["Cleaning Data with Open Refine,"](https://programminghistorian.org/en/lessons/cleaning-data-with-openrefine) _The Programming Historian_

["Cleaning Data with OpenRefine for Ecologists"](https://datacarpentry.org/OpenRefine-ecology-lesson/01-working-with-openrefine/)
and ["OpenRefine for Social Science Data"](https://datacarpentry.org/openrefine-socialsci/),
_Data Carpentry: Building Communities Teaching Universal Data Literacy_

[Checklist for Digital Humanities Projects](http://humanidadesdigitales.net/evaluacion/eng/),
La Red de Humanidades Digitales (RedHD), English and Spanish versions
available

[Programming Historian: Preserving Your Research Data](https://programminghistorian.org/en/lessons/preserving-your-research-data):
"This lesson will suggest ways in which historians can document and
structure their research data so as to ensure it remains useful in the
future."

[Library Carpentry: Tidy Data for Librarians](https://librarycarpentry.org/lc-spreadsheets/)

[Library Carpentry: OpenRefine](https://librarycarpentry.org/lc-open-refine/)

[Library Carpentry: Top 10 FAIR Data & Software Things](https://librarycarpentry.org/Top-10-FAIR/), a list of field-specific FAIR principles/techniques

[Black Living Data Booklet](https://fjday.com/projects) section on \"3 Steps to Download and Decode Data\"
[PDF](https://static1.squarespace.com/static/5f402e034b33c773cedbd428/t/5f5578b66699dc5f7fd72ef6/1599437000245/THE+BLD+Booklet+%284%29.pdf)

[Data Literacies: DH Institutes](https://curriculum.dhinstitutes.org/workshops/data-literacies/)
on tidy data, CSV, stages of data analysis, etc.

NEH's Office of Digital Humanities [Guide to Data Management Plans](https://www.neh.gov/sites/default/files/2018-06/data_management_plans_2018.pdf)

## Methods & Best Practices

- Arts & Humanities [Standards Directory from the Research Data Alliance](https://rd-alliance.github.io/metadata-directory/standards/)
- Frictionless Data
  - an [open-source framework to reduce friction](https://frictionlessdata.io/introduction/)
    in data workflows
  - [multiple standards](https://frictionlessdata.io/standards/)
    developing for data scientists and researchers
- [Annotation for Transparent Inquiry (ATI)](https://qdr.syr.edu/ati)
- [The CARE Principles for Indigenous Data Governance](http://doi.org/10.5334/dsj-2020-043)
  - Complementing the FAIR Principles
  - Emphasizing **C**ollective benefit, **A**uthority to control,
    **R**esponsibility, and **E**thics
- [Traditional Knowledge Labels](https://localcontexts.org/labels/traditional-knowledge-labels/)
  - Complementing licenses and permissions for use
  - Emphasizing relationships and engagement with Indigenous communities
- [DH Curation Guide](http://guide.dhcuration.org/)
  - Asks, "How do we align the care for digital materials with the methods/goals of traditional humanities disciplines?"
  - Introductory essays on different aspects of data curation in digital humanities, with links to relevant readings
  - produced by NEH-funded workshops in 2014 at Maryland Institute
    for Technology in the Humanities and University of Illinois
    Center for Informatics Research in Science and Scholarship
- UCLA Library: [Data Management for the Humanities](http://guides.library.ucla.edu/data-management-humanities)
  - extensive research guide
- [PM4DH \| Project Management for the Digital Humanities](https://scholarblogs.emory.edu/pm4dh/)
  - developed by Emory Center for Digital Scholarship
  - "curriculum for managing digital projects in academic libraries
    and other settings"
- [Data Nutrition Project](https://datanutrition.org/)
  - "nutrition labels" graphically designed to resemble those on food packaging
  - still in prototype stages
  - "aims to create a standard for interrogating datasets for
    measures that will ultimately drive the creation of better, more
    inclusive machine learning models"
  - "aims to highlight the key ingredients in a dataset such as
    meta-data and populations, as well as unique or anomalous
    features regarding distributions, missing data, and comparisons
    to other 'ground truth' datasets."
- [Digital Humanities Data Curation Guide (UMD)](https://archive.mith.umd.edu/dhcuration-guide/guide.dhcuration.org/)
- [Resources from Humanities at Scale (DARIAH)](http://has.dariah.eu/?page_id=688)
- [Managing and Sharing Data: Best Practices for Researchers](http://www.data-archive.ac.uk/media/2894/managingsharing.pdf)
  \[PDF\]
  - Created by the UK Data Archive, "the UK's largest collection of
    digital research data in the social sciences and humanities."
  - produced in 2011, a slightly outdated but thorough rundown of
    best practices for sharing, management, documenting, formatting,
    storing, and ethics
- Kristin Briney, _Data Management for Researchers: Organize, Maintain
  and Share Your Data for Research Success_ (Exeter, UK: Pelagic
  Publishing, 2015).
- [PRDS Guide on Data Documentation](https://researchdata.princeton.edu/research-lifecycle-guide/acquisition/metadata)
- [README Guide from Cornell's Research Data Management Service](https://data.research.cornell.edu/content/readme)
- [Data Paper Template from Princeton's Center for Digital Humanities](https://docs.google.com/document/d/1_CE7PHV5ghC3_69vUYc2a_YLu_D0lb01tzaL-B26TbA/edit#heading=h.mrx5te9hkkzy)
- [Best Practices for Data Description from DRYAD](https://datadryad.org/stash/best_practices#describe)
- [ICPSR Guide to Codebooks](https://www.icpsr.umich.edu/files/deposit/Guide-to-Codebooks_v1.pdf)
- ["Managing Qualitative Data" Module on Documentation](https://managing-qualitative-data.org/modules/2/a/)
- [Open Science Framework How-To for Data Dictionaries](https://help.osf.io/hc/en-us/articles/360019739054-How-to-Make-a-Data-Dictionary)
- Gebru, et al. 2021. "Datasheets for Datasets." [DOI: 10.1145/3458723](https://doi.org/10.1145/3458723).
- Mitchell, et al. 2019. "Model Cards for Model Reporting." [DOI: 10.1145/3287560.3287596](https://doi.org/10.1145/3287560.3287596).

## Example Datasets

- browse projects featured in [_Journal of Open Humanities Data_](https://openhumanitiesdata.metajnl.com/)
  - "features peer reviewed publications describing humanities data
    or techniques with high potential for reuse"
- Our extensive, curated list, organized by field and topic, available at:
  [https://hc3.princeton.edu/humanities-datasets](https://hc3.princeton.edu/humanities-datasets)
- [To Be Continued...](https://katherinebode.wordpress.com/projects/to-be-continued/)
  - developed by Katherine Bode alongside her book _A World of
    Fiction: Digital Collections and the Future of Literary History_
    (2018)
  - identified and analyzed fiction over 21,000 novels, novellas and
    short stories in 19th- and early 20th-century Australian
    newspapers.
- [Data Refuge](https://www.datarefuge.org/)
  - "a community-driven, collaborative project to preserve public climate and environmental data"
  - currently building a "Storybank", or map of data use cases and "life stories"
  - includes a number of toolkits for the rescue and protection of public data
  - spearheaded by UPenn's Program in Environmental History Lab
- [Early African American Film](https://openhumanitiesdata.metajnl.com/articles/10.5334/johd.7/)
  - wonderful example of thorough documentation
  - networks of producers/actors/directors in early twentieth
    century "race film"
- [Collections as Data: Part to Whole](https://collectionsasdata.github.io/part2whole/cohort1)
  - UNLV / University of Iowa / U Penn led Mellon grant, supports a number of project applicants
  - "Collections as data produced by project activity will exhibit
    high research value, demonstrate the capacity to serve
    underrepresented communities, represent a diversity of content
    types, languages, and descriptive practices, and arise from a
    range of institutional contexts."
- NYPL's ["What's on the Menu?"](http://menus.nypl.org/)
  - crowdsourced project that has garnered lots of public interest
  - interesting method of organically generating their data model
- [Black Anthology Project](https://dataverse.tdl.org/dataset.xhtml?persistentId=doi:10.18738/T8/5TBANV)
  - "information related to over 600 African American short stories
    that appeared in 100 African American and American anthologies
    published between 1925 and 2017."
  - tabular data on underrepresented authors and circulation
    histories
- [British Library Digital Scholarship](https://www.bl.uk/subjects/digital-scholarship)
  - Extensive resource featuring digital collections and datasets
    drawn from the British Library collections, including digitized
    printed books, datasets for image analysis, datasets about the
    BL collections, datasets for content mining, digital mapping,
    and an archive of UK web content.
  - Example: [CM Taylor Keylogging Data](https://data.bl.uk/cmtaylorkeylogging/) from
    the author C M Taylor captured between 17 October 2014 to 5
    March 2018, during the writing of the novel _Staying On_, 2018
- [ToposText](https://topostext.org/index.php)
  - "an indexed collection of ancient texts and mapped places
    relevant the the history and mythology of the ancient Greeks
    from the Neolithic period up through the 2nd century CE"
- [Quill Project](https://www.quillproject.net/)
  - marking up "negotiated texts" written/decided by committee:
    constitutions, legislative proceedings, statements, etc.
  - "legibility to the general public only of secondary concern" --
    an archive primarily for scholars
  - example:
    [https://www.quillproject.net/event_visualize/493](https://www.quillproject.net/event_visualize/493)

## Further Readings

### Data & Method

Tanya E. Clement, ["Where Is Methodology in Digital Humanities?"](http://dhdebates.gc.cuny.edu/debates/text/65),
_Debates in the Digital Humanities 2016_

Ryan Cordell, "[Teaching Humanistic Data Analysis](https://ryancordell.org/research/teachingHDA/)"
(2019)

Luke Stark and Anna Lauren Hoffmann, "[Data Is the New What? Popular Metaphors & Professional Ethics in Emerging Data Culture,](https://culturalanalytics.org/2019/05/data-is-the-new-what-popular-metaphors-professional-ethics-in-emerging-data-culture-2/)"
_Cultural Analytics_ (2019)

Daniel Rosenberg, ["Data Before the Fact,"](http://static1.1.sqspcdn.com/static/f/1133095/23310656/1376447540493/Rosenburg_RawData.pdf)
in _"Raw Data" Is an Oxymoron,_ ed. Lisa Gitelman (MIT Press, 2013)

Johanna Drucker, ["HTML and Structured Data"](http://dh101.humanities.ucla.edu/?page_id=20) (2013)

Michael Hancher, ["Re: Search and Close Reading,"](http://dhdebates.gc.cuny.edu/debates/text/63)
_Debates in the Digital Humanities 2016_

Ricardo L. Punzalan, Diana E. Marsh, Kyla Cools, ["Beyond Clicks, Likes, and Downloads: Identifying Meaningful Impacts for Digitized Ethnographic Archives,"](https://archivaria.ca/index.php/archivaria/article/view/13614)
_Archivaria_ 84 (Fall 2017)

Klein, Lauren F. "The Image of Absence: Archival Silence, Data Visualization, and James Hemings." American Literature 1 December 2013; 85 (4):
661--688. [https://doi.org/10.1215/00029831-2367310](https://doi.org/10.1215/00029831-2367310).

### Data Cleaning

Katie Rawson & Trevor Muñoz, ["Against Cleaning"](http://curatingmenus.org/articles/against-cleaning/) (2016)

Mia Ridge, ["Mia Ridge explores the shape of Cooper-Hewitt collections"](https://labs.cooperhewitt.org/2012/exploring-shape-collections-draft/), _Cooper-Hewitt Labs_ (2012)

Lauren F. Klein, ["The Image of Absence: Archival Silence, Data Visualization, and James Hemings,"](https://doi.org/10.1215/00029831-2367310) _American Literature_ 85, no. 4 (2013)

Garfinkel, Simson L. "De-Identification of Personal Information." National Institute of Standards and Technology NISTIR 8053, October 2015. [http://dx.doi.org/10.6028/NIST.IR.8053](http://dx.doi.org/10.6028/NIST.IR.8053).

Lincoln, Matthew D. "Tidy Data for the Humanities." Matthew Lincoln, PhD (blog), 26 May 2020, [https://matthewlincoln.net/2020/05/26/tidy-data-for-humanities.html](https://matthewlincoln.net/2020/05/26/tidy-data-for-humanities.html). (Accessed January 31, 2022.)

Sperberg-McQueen, C.M. and David Dubin. "Data Representation." DH Curation Guide, (no date) [https://archive.mith.umd.edu/dhcuration-guide/guide.dhcuration.org/index.html%3Fp=63.html](https://archive.mith.umd.edu/dhcuration-guide/guide.dhcuration.org/index.html%3Fp=63.html)
(Accessed January 31, 2022.)

Wickham, Hadley. "Tidy Data." Journal of Statistical Software 2014; 49 (10): 1-23. [https://doi.org/10.18637/jss.v059.i10](https://doi.org/10.18637/jss.v059.i10).

Babau, Alison. "Classics, 'Digital Classics' and Issues for Data Curation." DH Curation Guide, (no date) [https://archive.mith.umd.edu/dhcuration-guide/humanitiesdatacurationguide.wordpress.com/contents/classics-digital-classics-and-issues-for-data-curation/index.html](https://archive.mith.umd.edu/dhcuration-guide/humanitiesdatacurationguide.wordpress.com/contents/classics-digital-classics-and-issues-for-data-curation/index.html) (Accessed February 14, 2022)

Gebru, Timnit, Jamie Morgenstern, Briana Vecchione, Jennifer Wortman Vaughan, Hanna Wallach, Hal Daumé III, and Kate Crawford. "Datasheets for Datasets." Communications of the ACM 64(12): pp. 86-92, 2021. [https://doi.org/10.1145/3458723](https://doi.org/10.1145/3458723)

Levine, Melissa. "Policy, Practice, and Law." DH Curation Guide, (no
date) [https://archive.mith.umd.edu/dhcuration-guide/guide.dhcuration.org/legal/policy.html](https://archive.mith.umd.edu/dhcuration-guide/guide.dhcuration.org/legal/policy.html) (Accessed February 14, 2022)

Mitchell, Margaret, Simone Wu, Andrew Zaldivar, Parker Barnes, Lucy
Vasserman, Ben Hutchinson, Elena Spitzer, Inioluwa Deborah Raji, and
Timnit Gebru. "Model Cards for Model Reporting." FAT\* '19: Proceedings
of the Conference on Fairness, Accountability, and Transparency: pp.
220-229, 2019.
[https://doi.org/10.1145/3287560.3287596](https://doi.org/10.1145/3287560.3287596)

Van den Eynden, Veerle, Louise Corti, Matthew Woollard, Libby Bishop,
and Laurence Horton. "Managing and Sharing Data: Best Practices for
Researchers." 3rd Ed. Essex: UK Data Archive, 2011.
[https://dam.ukdataservice.ac.uk/media/622417/managingsharing.pdf](https://dam.ukdataservice.ac.uk/media/622417/managingsharing.pdf)
(Accessed February 28, 2022)
