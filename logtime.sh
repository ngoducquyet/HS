#/bin/date  --rfc-3339=seconds >> timeresult
#/bin/echo -n " Thoi gian log time job1"  >> timeresult

/bin/date +"Thoi gian log time job1 vao luc: %T_%d:%m:%y" >> timeresult



