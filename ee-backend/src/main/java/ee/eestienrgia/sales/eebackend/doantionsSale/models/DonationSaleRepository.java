package ee.eestienrgia.sales.eebackend.doantionsSale.models;

import ee.eestienrgia.sales.eebackend.doantionsSale.models.data.DonationSale;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DonationSaleRepository extends JpaRepository<DonationSale, Long> {
}
