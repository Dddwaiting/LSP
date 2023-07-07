package edu.scnu.lims.entity;

import edu.scnu.lims.constant.DeviceApplyStatusEnum;
import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 */
@Data
@Entity
@Table(name = "device_apply")
public class DeviceApply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer deviceApplyId;
    private String borrowReason;
    private Long promiseTimestamp;
    private Long applyTimestamp;
    private Long grantTimestamp;
    private Long returnTimestamp;
    private Long finishTimestamp;
    private BigDecimal cost;

    private String plant;
    @Enumerated(EnumType.STRING)
    private DeviceApplyStatusEnum status;

    @ManyToOne
    @JoinColumn(name = "device_id")
    private Device device;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
