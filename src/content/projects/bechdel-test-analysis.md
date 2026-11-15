---
title: Bechdel Test Movie Analysis
summary: Trends in gender representation across 9,000+ films, and ML models that predict whether a film passes the Bechdel Test.
date: 2025-03-01
endDate: 2025-06-01
tags: [Python, pandas, scikit-learn, seaborn, networkx]
repo: https://github.com/lhchi04/Bachdel-Test-Movie-Analysis
featured: false
status: archived
---

## Overview

Combined a Kaggle IMDb/Bechdel dataset (9,000+ films) with FiveThirtyEight's dataset (~1,700 films with budgets and box office) to study gender representation in film over time.

## Method

- **Cleaning and merging** on movie titles, resolving inconsistent formatting and missing values.
- **Feature engineering:** total gross, profit, release decade, and a pass/fail label.
- **Visualization** of trends by decade and genre with matplotlib, seaborn and networkx.
- **Modeling:** Logistic Regression, Decision Tree, Random Forest and KNN classifiers.

## Results

Logistic Regression had high recall on passing films but struggled on failing ones; Decision Tree and Random Forest were more balanced. Restricting to 1970–2010 didn't improve accuracy much but made the models easier to interpret.
