---
title: Not On My Watch
summary: A VR first-aid simulation with hand-tracked CPR and wound care, used by 500+ students for first-aid training.
date: 2025-10-01
endDate: 2026-04-01
tags: [Unity, C#, Meta Quest, XR, Claude API]
repo: https://github.com/lhchi04/not-on-my-watch
links:
  - label: CPR demo
    href: https://drive.google.com/file/d/1tQrhZFDDjYe5gc2ctWC0WrhVPrO7Ebf4/view
  - label: Wound care demo
    href: https://drive.google.com/file/d/1j2KovTA70kEP6xeyuNMQ_4lq4UGKBTTA/view
  - label: Slides
    href: https://canva.link/mpnmt7v1juj64x9
featured: true
status: live
---

## Overview

A VR simulation for Meta Quest where players practice real first-aid procedures on patients in distress. It tests response time, procedural accuracy, and prioritization across up to 4 simultaneous emergencies.

**Approved by the Trinity College Health Center and used by 500+ students for first-aid training.**

## How it plays

- **Tutorial rooms** teach each procedure step by step with no time pressure.
  - **CPR:** dial 911 on an in-game phone, check breathing, then 30 chest compressions with live feedback on depth (6 cm) and rate (100–120 BPM).
  - **Wound care:** put on gloves, spray antiseptic, wrap the bandage with a progress tracker.
- **Timed mode:** 4 patients go into distress over a 20-minute session. Points are deducted for late responses, wrong step order, and incomplete treatment.

## Engineering

- Hand-tracked interactions built on Unity's XR Interaction Toolkit, with real-time performance feedback.
- Integrated the Claude API as an in-game first-aid assistant that answers players' questions.
