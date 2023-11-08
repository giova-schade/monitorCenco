/**
  @file
  @brief Create sample data library
  @details This program is typically run once during environment configuration

  <h4> SAS Includes </h4>
  @li MONITOR_LOG_EVENTO.sas monitor

  <h4> SAS Macros </h4>
  @li be_rebuild_dataset.sas

**/

/* create the WORK datasets from DATALINES */
%inc monitor /source2;

/* delete the source dataset and append the WORK table in BESASGC */
%be_rebuild_dataset(MONITOR_LOG_EVENTO)
