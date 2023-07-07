create database if not exists lims;
use lims;

create table if not exists device_repair (
    device_repair_id int primary key auto_increment comment '申请ID',
    repair_reason varchar(128) comment '申请理由',
    repair_timestamp long comment '使用者报修时间',
    grant_timestamp long comment '管理员授权维修时间',
    repair_plant   varchar(56) comment '维修厂家',
    repair_cost  float comment '维修费用',
    finish_timestamp long comment '管理员归档时间',
    status enum('APPLIED', 'REPAIR', 'RETURNED', 'FINISHED', 'DENIED', 'CANCELED') comment '申请状态',
    device_id int comment '申请的设备',
    user_id int comment '申请人'

    );

