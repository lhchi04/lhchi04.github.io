---
title: NYC 311 Response Times
summary: How long NYC takes to close 2.59 million 311 requests, and whether it depends on what you ask for and where you live.
date: 2026-10-07
tags: [SQL, BigQuery, pandas, Tableau, Looker Studio]
role: Solo
repo: https://github.com/lhchi04/nyc-311-response-times
links:
  - label: Tableau
    href: https://public.tableau.com/views/NYC311ResponseTimes/HowlongdoesNYCtaketoanswera311request
  - label: Looker Studio
    href: https://datastudio.google.com/reporting/f88970a0-21c5-4cd3-a73c-16230a93be4c
cover: ../../assets/projects/nyc-311-heatmap.png
coverAlt: Heatmap of median hours to close by complaint type and borough; damaged-tree requests take 117 to 260 hours, most others under 2.
featured: true
status: live
---

## Question

How long does New York City take to close a 311 service request, and does the answer depend on what you ask for and where you live? I analyzed all 2.59 million requests filed in 2020.

## Key findings

1. **Most requests close within hours, but tree requests take months.** A New Tree Request took a median of 369 days.
2. **Response times differ by borough.** Manhattan closed fastest (median 1.4 hours, 67.1% within a day); Staten Island slowest (9.7 hours, 53.8%).
3. **The Bronx filed the most requests per resident:** about 400 per 1,000 residents, versus 224 in Staten Island.
4. **3.4% of requests had no usable close time**, so they count toward volume but not response times.

## Method

- **SQL (BigQuery):** cleaning rules in a view, aggregations, a join to borough population, and window functions (`RANK` for top complaint types per borough, `LAG` for month-over-month change).
- **Python (pandas):** audited every data problem before changing anything, charted results with Matplotlib and Seaborn.
- **Validation:** checked the join neither dropped nor duplicated rows, and that the notebook's clean row count matched the SQL view.
- **Dashboards:** Tableau (ZIP code map, monthly trend) and Looker Studio connected directly to BigQuery.

## Limitations

The close date is when the agency closed the ticket, not always when the problem was fixed, and 2020 was a pandemic year.
