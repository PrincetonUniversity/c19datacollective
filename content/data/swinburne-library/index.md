+++
title = "The Personal library and presumed reading of Algernon Charles Swinburne"
authors = ["John Walsh", "Alexandra Wingate", "Caroline Nurkkala", "Alyssa Ollier","Damien Thomas", "Jennifer Christie", "Evan Brandon"]
date = 2025-05-13
description = """
This data publication is a TEI-encoded bibliography (with links to full-text resources) of the personal library and presumed reading of Victorian poet and critic Algernon Charles Swinburne, as brought together in the Algernon Charles Swinburne project. Further details about the project and data are included in the data essay. 
""" 
draft = false

[extra]
doi = "10.34770/rtr7-2035"
pdc_url = "https://datacommons.princeton.edu/discovery/catalog/doi-10-34770-rtr7-2035"
+++

## Brief Project Description

Our data set is a TEI-encoded bibliography---with links to full-text
resources---of the personal library and presumed reading of Victorian
poet and critic Algernon Charles Swinburne. Swinburne is a central
cultural figure of the Victorian period. He is an important poet who
influenced 19th-century writers such as Oscar Wilde, Walter Pater, and
Thomas Hardy and important modernists, including William Butler Yeats,
Ezra Pound, and T. S. Eliot. His poetry was innovative, with metrical
and rhythmic brilliance and virtuosity, and shattered conventions and
barriers in its treatment of taboo sexual, religious, and political
topics. Swinburne had a close association with the Pre-Raphaelite
painters and poets and was a close friend of the Rossettis (Dante
Gabriel, William Michael, and Christina), William Morris, and Edward
Burne Jones. Beyond Pre-Raphaelite circles, he was a friend or acquaintance of other
prominent literary figures of the period, including Tennyson,
Browning, Arnold, and Ruskin, and visual artists such as James McNeil
Whistler and Simeon Solomon. Swinburne was also a prolific critic of
literature and art and an early champion of William Blake, Edgar Allan
Poe, Charles Baudelaire, and Walt Whitman. He revived interest in many
Elizabethan and Jacobean dramatists, including Ben Jonson, Thomas
Dekker, John Webster, Beaumont and Fletcher, John Ford, and others.

Because of Swinburne's fame and influence and his centrality and
prominence in the network of Victorian literary and cultural people,
events, and documents, the data presented here should be of interest
to anyone studying Victorian literature and culture. In particular,
the data could be used to:

- profile the reading habits of an important Victorian literary and
  cultural figure;
- compare Swinburne's library with the libraries of other cultural
  figures;
- assemble a full-text corpus for computational text analysis of the
  content of a Victorian personal library;
- explore questions related to book history and readership.

For our own research, we compiled the data to analyze and profile the
library and presumed reading of Swinburne. We want to know, for
instance, the authors, languages, genres, and literary periods
represented in Swinburne's library. Building on our analysis of the
bibliographic data, we assembled a full-text corpus of Swinburne's
personal library and presumed reading. We are now undertaking a
comparative full-text analysis
of that corpus and Swinburne's own poetry, looking for similarities
and differences, influences, and intertextual connections.

### Creators' Names, Institutions, and Contact Information

- John A. Walsh, Indiana University, <jawalsh@iu.edu>
- Alexandra Wingate, Indiana University, <alewinga@iu.edu>
- Caroline Nurkkala, independent scholar, <caroline.nurkkala@gmail.com>
- Alyssa Ollier, Kentucky Historical Society, <alyssa.ollier@ky.gov>
- Damien Thomas, Indiana University, <thomdaro@iu.edu>
- Jennifer Christie, Indiana University, <jechri@iu.edu>
- Evan Brandon, Indiana University, <eobrando@iu.edu>

### Funder

We are grateful for generous funding from the Indiana University
Presidential Arts and Humanities Program.

### Date of Creation & Dates of updates

The project began in 2019 with the transcription of the Sotheby's
sales catalog. In the 2021-2022 academic year, the sales catalog data
were augmented by additional "presumed reading" derived from citations
in Swinburne's poetry and other sources. Data checking, cleaning, and
authority control continued throughout leading up to the 1.0 release
on 17 March 2025.

### Languages

Most of the items in the bibliography are English-language texts,
although there are a number of items in French, Italian, Greek, Latin,
and other western languages.

## Collection & Creation Methodology

The foundation of the data set is a TEI-based bibliography derived
from the sales catalog for Swinburne's personal library, which was
sold at auction by Sotheby's over three days, 19-21 June 1916. The
catalog is an 83-page document listing 938 auction lots. We
transcribed from a facsimile of the catalog published in volume
6 of _Sales Catalogues of Libraries of Eminent Persons_ (London:
Mansell, with Sotheby Parke-Bernet Publications, 1972), edited by John
Woolford, 247-363.

{{ figure(src="Fig1.png", caption="Fig. 1. Title page from the sales catalog of Swinburne's personal library", id="fig1") }}

{{ figure(src="Fig2.png", caption="Fig. 2. Example entries from the sales catalog of Swinburne's personal library", id="fig2") }}

We identified 1540 items in the sales catalog. An "item" could include
many individual works, since many of the items are multi-volume sets
of an author's complete works. For instance, lot 693 includes a
48-volume edition of Sir Walter Scott's _Waverley Novels_ (Boston:
Estes and Lauriat, 1893).

It is important to note that while this sales catalog should represent
the majority of Swinburne\'s library, it is not his complete library.
The infamous bibliographer and forger T. J. Wise had first access to
Swinburne's library and claims to have acquired from it all of
Swinburne's unpublished manuscript material. But he also acquired
printed volumes, including first editions of Elizabethan dramas
(Woolford 249). To expand our reach beyond the sales catalog, we have
searched the catalogs of forty-four national, public, and university
libraries and located 16 additional books to add to our dataset.
Twenty-seven total items have a `note[@type="provenance"]`
indicating the current institution holding them. We will continue to
search library catalogs for additional copies and update the data set
accordingly. Eight additional items owned by Swinburne have also been
identified in the sales catalog of the library of his close friend
Theodore Watts-Dunton.

For our own research, we are interested not just in the items in
Swinburne's library but in other works he may reasonably be presumed
to have read. So we supplemented the foundational bibliography of
works in Swinburne's library with additional works that Swinburne
cites in his own poetry and Swinburne's list of "The Best Hundred
Books" published in the _Pall Mall Gazette_ January 26th, 1886.

The titles, epigraphs, and authorial notes of many of Swinburne's
poems include references to specific authors and works. For instance,
Swinburne's "Birthday Ode" for Victor Hugo is a sort of bibliography
in verse, and the poem is accompanied by extensive notes that identify
the individual works by Hugo that are referenced by specific lines in
the poem. We easily and systematically identified such items because
the six volumes of Swinburne's collected _Poems_ (London: Chatto &
Windus, 1904) have been transcribed and encoded for The Algernon
Charles Swinburne Project (Walsh). The TEI encoding of the poems
explicitly identifies titles, epigraphs, and notes, as well as any
bibliographic references contained within those elements.

Due to our interest in performing text analysis with the dataset's
full texts, we have not added new bibliographic entries---nor their
accompanying full text links---for works indicated by the _Pall Mall_
article and Swinburne's poetry if they are already represented by
entries in Swinburne's sales catalog. This is to avoid duplication of
works in our corpus. We do, however, preserve instances where
Swinburne owned multiple editions. From a distance reading
perspective, the differences between editions are not as crucial as
they would be in a close bibliographic analysis, though we have added
specific editions when Swinburne has cited them, and they were not
already represented in the sales catalog, such as the first edition of
Fitzgerald's translation of Khayyam's _Rubaiyat_ in no. 19 of the
_Pall Mall_ list. However, _Pall Mall_ works and those referenced by
Swinburne in his poetry can be extracted from across the entire
dataset since we respectively have used `#top100` and `#referenced` in the
`@corresp` of `<biblStruct>` across the entire dataset to flag these items.

### Data Structure

The data consists of a single TEI XML file. Using TEI div (division)
element, the file is sub-divided into sections for the sales catalogs
(`div[@source = 'sales-catalogue-swinburne']` and `div[@source =
'sales-catalogue-watts-dunton')`, the "Best Hundred Books" list
(`div[@source = 'best-hundred-books']`), the citations from the six-volume collected
_Poems_ (`div[@source = 'poems-1904']`), and items owned by Swinburne found in our search of library catalogs (`div[@source = 'libraries']`).

This separation of sources into separate div elements is a practical
organizational decision but also supports a variety of research uses
of the data. Swinburne is recognized as one of the most widely read of
English poets, a poet with a tendency to break out in a recitation of
entire long poems or passages that he had committed to memory. Given
what we know of Swinburne's extensive reading and uncanny memory it
seems more likely than not that he read any individual volume included
in the data set. Henry Adams (1918) described a dinner party at the
home of Richard Monckton Milnes (later, Lord Houghton) where a young
Swinburne discoursed on literature. The dinner guests "could not
believe his incredible memory and knowledge of literature, classic,
mediæval, and modern; his faculty of reciting a play of Sophocles or a
play of Shakespeare, forward or backward, from end to beginning; or
Dante, or Villon, or Victor Hugo" (p. 140). Of course, we cannot know
that he read everything in his library just as we cannot know that he
owned (or read) volumes that he quotes or cites in his poetry.
Researchers are invited to come to their own conclusions or inferences
about matters of ownership and reading with the data we provide and
their own research. And the organization of the data allows
researchers to include or exclude particular sources. For instance, if
one wished to limit the data sets to volumes for which we have
evidence of ownership, this is easily done by limiting the data to
volumes within
`div[@source = 'sales-catalogue-swinburne']`,
`div[@source = 'sales-catalogue-watts-dunton')`,
and `div[@source = 'sales-catalogue-watts-dunton')`.

Below is an example record for a single work, William Michael
Rossetti's 1870 edition of Percy Bysshe Shelley's poetry:

```xml
  <biblStruct corresp="#owned" xml:id="sb719.1">
    <monogr>
      <title>Poetical Works, edited, with Notes and Memoir, by W. M.
      Rossetti</title>
      <author corresp="#shelley_p">Shelley, P. B.</author>
      <note type="description">portrait</note>
      <imprint>
        <date when="1870"/>
      </imprint>
      <extent>
        <measure unit="volumes" quantity="2"/>
      </extent>
    </monogr>
    <relatedItem
      n="1"
      type="full-text"
      corresp="#ht"
      target="https://hdl.handle.net/2027/hvd.32044015680069"/>
    <relatedItem
      n="2"
      type="full-text"
      corresp="#ht"
      target="https://hdl.handle.net/2027/hvd.32044090294596"/>
  </biblStruct>
```

In some cases, the sales catalog has sparse bibliographic detail such
that it will not accommodate the more complete `<biblStruct>` element.
In such cases we use the more flexible `<bibl>` element.

Within the more complex XML structure of the biblStruct or bibl
elements, the discrete fields include, when available:

| **field**                              | **relative xPath (within biblStruct)**                        |
| -------------------------------------- | ------------------------------------------------------------- |
| title                                  | `biblStruct/monogr/title`                                     |
| author                                 | `biblStruct/monogr/author`                                    |
| descriptive note                       | `biblStruct/monogr/note[@type = "description"]`               |
| publication date                       | `biblStruct/monogr/imprint/date/@when`                        |
| publisher                              | `biblstruct/monogr/imprint/publisher`                         |
| publication place                      | `biblstruct/monogr/imprint/pubPlace`                          |
| number of volumes                      | `biblStruct/monogr/extent/measure[@unit="volumes"]/@quantity` |
| link to full-text versions of the item | `biblStruct/relatedItem`                                      |
| text of inscription                    | `biblStruct/monogr/note[@type = "inscription"]`               |
| current ownership                      | `biblStruct/note[@type = "provenance"]`                       |

Note that, whenever possible, we include links to full-text versions
of the works in the data set. Of the 1731 items in the data, 1651
include links to full-text versions. There are a couple caveats to
share about the full-text versions. Whenever possible, we tried to find a full-text
version for the specific edition cited in our sources. However, the
sources frequently lack the bibliographic detail necessary to identify
a specific edition. If the data are ambiguous or we cannot find a
full-text version of the edition specified in the data, we opted for
another edition published before or during Swinburne's lifetime, an
edition that Swinburne might have owned. As a last resort we would include an edition published after
Swinburne's death. Most of the full-text versions are from the
HathiTrust digital library, and the full text is generated through
optical character recognition of page images. Thus, there are errors
in the automated transcription---these are not carefully transcribed
and edited full-text editions. However, they are suitable for many
distant reading and text-data-mining analytical methods.

The data also contain structured lists of authority entries
referencing established controlled vocabularies for the following
fields identifying known people, places, and organizations:

| Field                                                 | X-Path                                                    |
| ----------------------------------------------------- | --------------------------------------------------------- |
| Authors, editors, and other intellectual contributors | `/TEI/text/front/div[@n='authors']//person`               |
| Publishers and printers (organizations)               | `/TEI/text/front/div[@n='publishers']/listOrg//org`       |
| Publishers and printers (individuals)                 | `/TEI/text/front/div[@n='publishers']/listPerson//person` |
| Publication places                                    | `/TEI/text/front/div[@n='places']//place`                 |

The URL reference to the controlled vocabulary's proper entry is
placed in a `@source`. For places, we reference the Getty Thesaurus of
Geographic Names (TGN). For people and organizations, in the first
instance we use Library of Congress Name Authority Files (LCNAF), but
if an LCNAF entry is unavailable, we link to the Virtual International
Authority File (VIAF). If neither LCNAF nor VIAF is available, no
`@source` is added to the entry. People also may have information
encoded about their birth, death, or floruit dates if it is included
in the LCNAF or VIAF preferred form of reference.

Each authority entry receives a unique identifier in `@xml:id`, which
is referenced in `@corresp` of the
`<author>`, `<publisher>`, and `<name>` of `<respStmt>` and `@ref` of
`<place>`. Below is the authority entry for Swinburne.

```xml
<person xml:id="swinburne">
  <persName
    source="http://id.loc.gov/authorities/names/n79047585">
    Swinburne, Algernon Charles, 1837-1909
  </persName>
  <birth when="1837"/>
  <death when="1909"/>
</person>
```

## Future work

The data set as described and presented is not a complete picture of
Swinburne's library and presumed reading. It does represent a complete
picture of the personal library as represented by the Swinburne and
Watts-Dunton sales catalogs. This representation of the personal
library is augmented by presumed reading gleaned from references in
the six volumes of Swinburne's collected _Poems_ (1904) and "The Best
Hundred Books" list that Swinburne sent to the _Pall Mall Gazette_ in 1886. However, we hope to augment the data set further with other
sources, including references found in Swinburne's letters, dramas,
prose criticism, juvenilia, and any poetry published after the 1904
collected _Poems._ The six volumes of letters edited by Cecil Y. Lang
and four volumes edited by Terry Meyers are likely to be the richest
sources of new data, as well as the eleven-volume catalog of the
Ashley Library constructed by T. J. Wise, which contains books
belonging to Swinburne, presumably acquired by Wise along with
Swinburne's autograph manuscripts.

## Ethics

We are not aware of any ethical issues related to the collection or
use of these data.

## Format

The data are formatted as XML (eXtensible Markup Language), an open
file format documented at
<https://www.w3.org/TR/REC-xml/>. More
specifically, the data are encoded according to the Text Encoding
Initiative's Guidelines for P5: Guidelines for Electronic Text
Encoding and Interchange and conform to the schemas of the most recent
version of the Guidelines (at the time of writing, version 4.4.0. Last
updated on 19th April 2022, revision ff9cc28b0).

## Statement of Collaboration

The data were produced collaboratively, with John A. Walsh designing
and supervising the project. The initial transcription of the sales
catalog was performed by Caroline Nurkkala, with assistance from
Jennifer Christie. Alyssa Ollier performed additional encoding, with a
focus on data cleaning, correction, and implementing controlled
vocabularies for author and publisher names. Alexandra Wingate and
Damien Thomas continued with cleaning, correction, and authority
control and also supplemented the library sales catalog data with
items cited by Swinburne in his poetry.

## Versioning

As we continue with the research projects supported by these data, we
will periodically update the data. Significant updates will include
the addition of items cited in Swinburne's letters, his dramatic
works, and his prose criticism and fiction. Updates and revisions are
documented in the project's git repository hosted at
<https://github.com/jawalsh/swinburne-library>.

{% bibliography() %}
Adams, Henry (1918). _The Education of Henry Adams: An Autobiography._
Houghton Mifflin.

Swinburne, A. C. (1886, January 26). The best hundred books: By the
best hundred judges. _Pall Mall Gazette, 43_(6510), 1-2.

Swinburne, A. C. (1904). _The Poems of Algernon Charles Swinburne_
(Vol. 1--6). Chatto & Windus. Swinburne, A. C. (1959-1962). _The
Swinburne Letters_ (C. Y. Lang, Ed.; Vol. 1--6). Yale UP.

Swinburne, A. C. (2005). _Uncollected Letters of Algernon Charles
Swinburne_ (T. L. Meyers, Ed.; Vol. 1--3). Pickering & Chatto.

Walsh, J. A. (Ed.). (2012). _The Algernon Charles Swinburne Project_.
<http://swinburneproject.org/>

Woolford, J. (Vol. Ed.). (1972). "Algernon Charles Swinburne 19-21
June 1916 and Theodore Watts-Duyton 22 March 1939." In A. N. L. Munby
(Series Ed.), _Sales Catalogues of Libraries of Eminent Persons_ (Vol. 6) (pp. 247-363). Mansell, with Southeby Parke-Bernet Publications.
{% end %}

## Licensing & Rights:

The Personal library and presumed reading of Algernon Charles
Swinburne © 2023 by John A. Walsh, Alexandra Wingate, Caroline
Nurkkala, Alyssa Ollier, Damien Thomas, and Jennifer Christie is
licensed under CC BY 4.0.

## Data Citation

Walsh, J. A., Wingate, A., Nurkkala, C., Ollier, A., Thomas, D.,
Christie, J., & Brandon, E. (2025). _The Personal library and presumed
reading of Algernon Charles Swinburne_ (Version 1.0) \[Data set\].
<https://github.com/jawalsh/swinburne-library>
