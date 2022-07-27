#!/bin/bash

set -ex

# rm -rf .next

pnpm install --force
pnpm build

# pnpm start