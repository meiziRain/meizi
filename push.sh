# 当发生错误时中止脚本
set -e

git add .
git commit -m 'auto push by script'

git push origin master