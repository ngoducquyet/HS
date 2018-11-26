#/bin/date  --rfc-3339=seconds >> timeresult
#/bin/echo -n " Thoi gian log time job1"  >> timeresult
echo Test bien branch: $branch
/bin/date +"Thoi gian log time job $JOB_NAME vao luc: %T_%d:%m:%y" >> timeresult

