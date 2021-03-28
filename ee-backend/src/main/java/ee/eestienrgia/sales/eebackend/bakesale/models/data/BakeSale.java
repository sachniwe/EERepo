package ee.eestienrgia.sales.eebackend.bakesale.models.data;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="cafeitems")
@Data
public class BakeSale {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    private String name;
    private double price;
    private int quantity;
    private String image;
}
