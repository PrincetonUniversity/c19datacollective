+++
title = "Songs of Ourselves: The Circulations and Citations of Nineteenth-Century American Poetry on Twitter"
authors = ["Micah Bateman", "Caitlin Matheis"]
date = 2024-05-20

[extra]
doi = "10.34770/fbhp-c751"
pdc_url = "https://datacommons.princeton.edu/discovery/catalog/doi-10-34770-fbhp-c751"
+++

Social media has reconditioned the reception, circulation, and uses of literary texts and their authors. Citing Simone Murray and Jessica Pressman, Aarthi Vadde succinctly summarizes that “The Internet has eclipsed television as the determining environment of mass-mediated life...(reshaping) the diffusion of literary practices into paraliterary spheres of textual activity” (456). How social media users engage literature publicly has attracted the attention of a growing group of scholars who also include Susanna Sacks, Tess McNulty, Melanie Walsh, Anna Preus, Edmund G.C. King, Matthew Kilbane, and others. Walsh particularly has been able to leverage quantitative data for critical essays on, for instance, the citations of James Baldwin in #BlackLivesMatter tweets (“Tweets of a Native Son: The Quotation and Circulation of James Baldwin from Black Power to #BlackLivesMatter”). To assist the recent platform turn in literary studies, we’ve assembled a quantitative dataset that charts the number of citations per day by which Twitter (now X) users may refer to nineteenth-century American poets. Using researcher access to Twitter’s full archive, our dataset reveals the frequencies with which strings of text referring to 115 nineteenth-century American poets have been published since Twitter’s launch in 2006. Because Elon Musk’s acquisition of the platform has already resulted in significant data loss from user attrition as well as a foreclosure of researcher access to full-archive data, we view this dataset and others like it from the pre-X era as precious and the need for its preservation, urgent.

<!-- more -->

While poetry is not the only literary form to circulate on Twitter, Twitter has especially impacted the uses of it, as one of our authors notes in his essay on the circulation of Brecht’s “Motto” after the election of Donald Trump to the US presidency (Bateman). First, we use “poetry” to mean the loose conglomeration of verse forms that, as Virginia Jackson has noted, have come to be thought of as lyric poetry in the past two centuries. Our dataset includes references to poets indexed in three volumes: chiefly, _The Cambridge Companion to Nineteenth-Century American Poetry_, supplemented by _African-American Poets of the 19th Century_ and the New York Public Library’s LibGuide on nineteenth-century Black women poets. We have assembled a nearly exhaustive dataset of authors from these three indices with the exclusion of poets whose corpuses—though not lives—lie largely outside of our nineteenth-century periodization.

Second, we build on Joan Rubin’s _Songs of Ourselves: The Uses of Poetry in America_, not only in extending Rubin’s periodization into the twenty-first century digital age, but in bridging the functionalism of investigating poetry’s “uses” to the age of social-media users and user studies. Our view is that focusing on “use” and “users” avoids the methodological traps of claiming readings and receptions based on quotations and citations. But it also opens a rich dialog with media and communication studies, particularly drawing on the situated relationships between social-media users, platforms, authors, and texts, a constellation that Murray might classify as an “online reading formation,” but which we also position as being in conversation with José van Dijck’s theorizing of social-media user agency. Finally, we focus on nineteenth-century American poets and poetry as a gesture of media comparativism between nineteenth-century periodical culture following the market revolution and twenty-first century social-media culture. To wit, Walt Whitman’s “O Captain! My Captain!” achieved such virality during Whitman’s lifetime that he came to lament its creation, and it remains, on Twitter/X, a viral poem circulated to honor organizational leadership. One of the peaks of mentions of the string “o captain my captain” on Twitter, for example, aligned with the transition of power from Barack Obama to Trump. More than this, the affective nature of social media built on what Karin Wahl-Jorgensen calls its “emotional architecture” largely resembles the sensationalism and sentimentalism of the nineteenth-century press, which conditioned the success of “O Captain!” in the first place. And the participatory nature of Web 2.0, which has characterized it as a departure from previous media paradigms in the literature, also resembles the market revolution’s opening of new media outlets to many writers and editors who were previously excluded from the press: among them, perhaps, the lower-middle-class Whitman with his eighth-grade education. So in charting the uses of nineteenth-century poets on a twenty-first century social-media platform, we invite comparisons between the mediated conditions of their original circulations and the conditions of their digital afterlives—comparisons that for authors like Emily Dickinson have induced “misery” (Jackson) at the same time that, in other instances, might produce authorial felicity. “Whitman would’ve been amazing at Twitter,” claims the contemporary poet Dana Levin. Under a rubric of media comparativism, perhaps he already was. But for less canonical poets than Dickinson and Whitman, our dataset also limns recoveries and laments the lacks thereof.

These datasets have been created by Caitlin Matheis, a graduate research assistant in the School of Library and Information Science at the University of Iowa, and Micah Bateman, an assistant professor in the department. The initial data were pulled throughout the fall of 2022 and in January 2023, using a Python notebook that Walsh adapted from Ed Summers, which utilizes a Twitter-scraping tool, twarc2, from the Documenting the Now collective. We used Bateman’s full-archive researcher access to authenticate the data pulls, an affordance of Twitter’s Academic Research product track that the platform launched in January 2021 to allow academic researchers easier access to all of the Twitter API’s endpoints before the access was terminated by new leadership in 2023. The results of a search in the Python notebook show the number of tweets plus retweets per day that match the exact string of text searched by pulling from a [“tweet counts” API endpoint](https://developer.twitter.com/en/docs/twitter-api/tweets/counts/introduction). Our notebook strictly retrieves circulation counts (“get count”), so our data do not contain any specific tweets, any personal information about Twitter users, or references to their account information and thus aligns with the terms of condition for researcher access to Twitter’s full archive as well as preserves users’ right to be forgotten.

Our searches currently include names of poets as they are popularly known or referred to in the anthologies cited. However, in instances where a writer is primarily known by or published under multiple names, including pseudonyms, multiple searches were conducted. Names were taken from indexes and entered using all lowercase letters, included dashes and periods where necessary, and excluded hashtags. This means that our data are limited to the full citation of poets, which includes misattributions and homonymous citations and excludes variable or pseudonymous attribution (to, for instance, “W. Whitman”). Currently, our searches include poets such as Walt Whitman, Edgar Allan Poe, Emily Dickinson, Frances Ellen Watkins Harper, Frederick Douglass, and the Fireside Poets. Other poets currently included in the dataset were gathered from the _Cambridge Companion to Nineteenth-Century American Poetry_, [_African American Women Writers of the 19th Century_](https://libguides.nypl.org/african-american-women-writers-of-the-19th-Century/poetry), and [_African American Poets of the 19th Century_](https://sites.google.com/site/aapoets19century/). Of note is that tweet counts are produced by string searches of authors’ names, so the fidelity of returns depends on the popularity of the full name searched. Counts of “Walt Whitman” and “Emily Dickinson” likely refer to the nineteenth-century poets, or else to places and organizations named after them, such as Walt Whitman High School. But string searches for “William Walker” likely include many more references to persons who are not the nineteenth-century poet intended.

For each string of text entered into the notebook (each author name), an approximately 300 KB .csv file is created. Each spreadsheet has a row for each date Twitter has been available from its launch until the day of the search and a column for the number of tweets that contained the string of text for that particular day. The monthly average for each string is also included in the data. The file name for each CSV contains the poet’s last name, preceded by the initial of their first and, if applicable, middle or second name. The search strings, dates, other names in which the author appears in the dataset, and times that the searches were completed are recorded in the “Completed Twitter Search List PDF.” The search data is also available in machine-readable format in the “Completed Twitter Search List CSV.” Each entry in the CSV appears in the order: name of author, search string, date, time, and (if applicable) other names the author is known by that are included in the dataset.

Our datasets reflect the number of extant tweets from 2022-2023 fully citing a given author’s name as of the date the data were pulled. This means that historical data could change on a daily basis depending on attrition—the deletion of tweets (now posts) or the suspension of user accounts—and our counts would not reflect that attrition without updates, which are impossible in the Musk era without researcher access to full-archive data. The data are licensed under the Creative Commons Attribution 4.0 International (CC BY 4.0) and may be cited according to standard citation practices from the _Nineteenth-Century Data Collective_ with Matheis cited as the first author.

{% bibliography() %}
_African-American Poets of the 19th Century_. <https://sites.google.com/site/aapoets19century/>. Accessed 30 Nov. 2022.

Bateman, Micah. "Tweeting (in) 'Dark Times': Brecht's Second Svendborg 'Motto' Post-Trump (MLA 2020)." _ecibs: Communications of the International Brecht Society_ 2020.1 (2020).

Divisions, Schomburg Center Research. _Research Guides: African American Women Writers of the 19th Century: Poetry_. <https://libguides.nypl.org/african-american-women-writers-of-the-19th-Century/poetry>. Accessed 30 Nov. 2022.

Jackson, Virginia. "Dickinson's Misery." _Dickinson's Misery_. Princeton University Press, 2013.

Larson, Kerry. _The Cambridge Companion to Nineteenth-Century American Poetry_. Cambridge University Press, 2011. _search.lib.uiowa.edu_, <https://doi.org/10.1017/CCOL9780521763691>.

Levin, Dana. “Every Atom | No. 35,” _North American Review_, July 4, 2019. Response made to Levin by Twitter user @csferreira08.

Murray, Simone. "Reading online: updating the state of the discipline." _Book History_ 21.1 (2018): 370.

Ed Summers, et al. Docnow/twarc: V2.13.0. v2.13.0, Zenodo, 26 Dec. 2022, doi:10.5281/zenodo.7484102.

Vadde, Aarthi. “Platform or Publisher.” _PMLA: Publications of the Modern Language Association of America_, vol. 136, no. 3, 2021, pp. 455–62, <https://doi.org/10.1632/S0030812921000341>.

Van Dijck, José. "Users like you? Theorizing agency in user-generated content." _Media, Culture & Society_ 31.1 (2009): 41-58.

Wahl-Jorgensen, Karin. "The emotional architecture of social media." _A networked self and platforms, stories, connections_. Routledge, 2018. 77-93.

Walsh, Melanie. "Tweets of a native son: The quotation and recirculation of James Baldwin from Black Power to #BlackLivesMatter." _American Quarterly_ 70.3 (2018): 531-559.
{% end %}