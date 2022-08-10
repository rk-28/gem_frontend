#!/bin/bash
set -ex

#s3 sync
aws s3 sync --dryrun --exclude "*.DS_Store" s3://fcd-staging-scrapper/latest-staging/stage0-sourcedata/NAIC-SBS/ /home/ubuntu/staging-fcd/staging-backend/import/stage0-sourcedata/NAIC-SBS/ >> /var/log/fcd-logs/NAIC/dryrun_naic.log 2>&1

aws s3 sync --exclude "*.DS_Store" s3://fcd-staging-scrapper/latest-staging/stage0-sourcedata/NAIC-SBS/ /home/ubuntu/staging-fcd/staging-backend/import/stage0-sourcedata/NAIC-SBS/ >> /var/log/fcd-logs/NAIC/sync01_naic.log 2>&1

#virtual environement

cd ~/staging-fcd/staging-backend/first_class/

python3.8 manage.py scrape_naic_sbs --state KS >> /var/log/fcd-logs/NAIC/scrape_KS.log 2>&1

cat /var/log/fcd-logs/NAIC/scrape_KS.log | grep -E "Traceback|traceback|IndexError|KeyError|OSError|SyntaxError|selenium.common.exceptions|django.db.utils"

if [[ $? -eq "0" ]]; then
   set -e
   echo -e "Something went wrong, sending e-mail"
   echo "NAIC KS scraping stopped in the middle of the process" | mail -s "NAIC KS Scraping Status" rakeshkhannar.ait@gmail.com
   ll
else
   echo "NAIC KS scraping completed, parsing executed" | mail -s "NAIC KS Scraping Status" rakeshkhannar.ait@gmail.com
fi

python3.8 manage.py scrape_naic_sbs --state IL >> /var/log/fcd-logs/NAIC/scrape_IL.log 2>&1

cat /var/log/fcd-logs/NAIC/scrape_IL.log | grep -E "Traceback|traceback|IndexError|KeyError|OSError|SyntaxError|selenium.common.exceptions|django.db.utils"

if [[ $? -eq "0" ]]; then
   set -e
   echo -e "Something went wrong, sending e-mail"
   echo "NAIC IL scraping stopped in the middle of the process" | mail -s "NAIC IL Scraping Status" rakeshkhannar.ait@gmail.com
   ll
else
   echo "NAIC IL scraping completed, parsing executed" | mail -s "NAIC IL Scraping Status" rakeshkhannar.ait@gmail.com
fi

aws s3 sync --exclude "*.DS_Store" /home/ubuntu/staging-fcd/staging-backend/import/stage0-sourcedata/NAIC-SBS/ s3://fcd-staging-scrapper/latest-staging/stage0-sourcedata/NAIC-SBS/ >> /var/log/fcd-logs/NAIC/sync02_naic.log 2>&1