package ee.eestienrgia.sales.eebackend.bakesale.models;

import ee.eestienrgia.sales.eebackend.bakesale.models.data.BakeSale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BakeSaleRepository extends JpaRepository<BakeSale, Long> {
}
