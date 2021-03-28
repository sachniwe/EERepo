package ee.eestienrgia.sales.eebackend.bakesale.services;

import ee.eestienrgia.sales.eebackend.bakesale.models.BakeSaleRepository;
import ee.eestienrgia.sales.eebackend.bakesale.models.data.BakeSale;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BakeSaleService {
    BakeSaleRepository bakeSaleRepository;

    public BakeSaleService(BakeSaleRepository bakeSaleRepository) {
        super();
        this.bakeSaleRepository = bakeSaleRepository;
    }
  public BakeSale save(BakeSale bake){
        return bakeSaleRepository.save(bake);
    }

    public Page<?> getBakeSales(){
        Pageable pageable = PageRequest.of(0, 10);
        return bakeSaleRepository.findAll(pageable);
    }
}
