---
title: Job Market Tracker
summary: Ranks the technologies entry-level software postings actually require, and flags the ones I don't have evidence for yet.
date: 2026-10-30
endDate: 2026-11-12
tags: [TypeScript, React, AWS Lambda, DynamoDB, SQS, AWS CDK]
role: Solo
repo: https://github.com/lhchi04/job-market-tracker
demo: https://lhchi04.github.io/job-market-tracker/
cover: ../../assets/projects/job-market-tracker.png
coverAlt: Job Market Tracker dashboard ranking technologies by how many postings firmly require them, each marked as a gap.
featured: true
status: live
---

## Problem

I'm a new grad applying to software jobs every day, and I wanted to decide what to learn next from data instead of guesses. So I saved the postings I applied to and counted which technologies they ask for. The biggest gaps turned out to be AWS and TypeScript, so I built this with them.

## What it does

- **Dashboard** ranks technologies by how many postings _firmly_ require them. "Java, Python, or Go" doesn't require Go, so mentions inside either-or lists are counted separately.
- **Roles I can't take are excluded.** Postings that require citizenship or a security clearance are filtered out.
- **Check a posting:** paste any job description to see which technologies it asks for and which I have evidence for. It runs entirely in the browser.

## Architecture

The dashboard is a React app on GitHub Pages that calls a read-only API (API Gateway → Lambda → DynamoDB). Saved postings are synced to a private S3 bucket; object events go to an SQS queue that batches uploads for 60 seconds and triggers an Ingest Lambda, which recomputes every count. Failed runs land in a dead-letter queue with a CloudWatch alarm that emails me. All AWS infrastructure is defined with CDK.

## Design decisions

- **Recompute everything on each upload.** With 68 postings a full recompute takes under 4 seconds, and it makes every run idempotent, so retries are always safe.
- **The posting check runs client-side.** It reuses the same `core` package as the backend, so the dashboard and the checker can't disagree, and pasted text never leaves the page.
- **Costs near zero by design:** on-demand DynamoDB, no VPC or NAT gateway, API throttled to 10 req/s, two-week log retention.
- **Least privilege, enforced by tests.** Infrastructure tests fail if the API Lambda gains write access or a bucket becomes public.

## Results

| Metric                 | Result                                   |
| ---------------------- | ---------------------------------------- |
| Postings analyzed      | 68 (5 more filtered out)                 |
| Full recompute         | 1.0–3.9 s, at most 126 MB memory         |
| API latency (warm)     | 175 ms median, 276 ms p95                |
| Lighthouse performance | 99 mobile, 100 desktop                   |
| Tests                  | 45 Vitest tests across all four packages |
