package ee.eestienrgia.sales.eebackend.doantionsSale.models.data;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="donateditems")
@Data
public class DonationSale {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    private String name;
    private double price;
    private String image;
}
